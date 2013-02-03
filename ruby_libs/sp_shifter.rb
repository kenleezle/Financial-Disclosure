require 'json'

PATH = '../UI/js/data/'
DSTPATH = '../UI/js/sp_shifted_data/'

puts "loading sp500 data..."

sph = Hash.new
sp500 = JSON.load File.new(PATH+"SP500.json").read
sp500["days"].each { | spday |
  if spday["date"] =~ /(\d\d\d\d)-(\d\d)-(\d\d)/ then
    date = "#{$2}/#{$3}/#{$1}"
    sph[date] = spday["change"]
  else
    puts "ERROR"
    puts spday
  end
}

puts "... finished"

Dir.foreach(PATH) do |item|
  next if item =~ /^\./
  next if item == '.' or item == '..'
  next if item == 'SP500.json'
  puts "processing "+PATH+item

  official = JSON.load File.new(PATH+item).read
  official["Holdings"].each { | holding |
    factor = 1
    first_date = holding["DailyPercentageChanges"][0]["Date"]
    puts holding["DailyPercentageChanges"][0]["Date"]
    sp_on_first_date = sph[first_date]
    puts "sp on first date"+sp_on_first_date.to_s
    puts "stock on first date"+holding["DailyPercentageChanges"][0]["PercentageChange"].to_s
    shift = sp_on_first_date.to_f - holding["DailyPercentageChanges"][0]["PercentageChange"].to_f

    #if item == "N00009825.json" then
    #  factor = 2.0
    #end
    puts "Shift for holding #{holding["Ticker"]}:"+shift.to_s


    holding["DailyPercentageChanges"].each { | dpc |
      dpc["PercentageChange"] = (dpc["PercentageChange"] + shift)*factor
    }
  }
  File.new(DSTPATH+item,"w").write JSON.generate(official,{:indent => "  ",:object_nl => "\n"})
end
