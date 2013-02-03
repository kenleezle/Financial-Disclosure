require 'json'

output = Hash.new
output["name"] = "SP500"
output["days"] = Array.new
benchmark = 1268.80
change = last_change = 0
value = last_value = benchmark
STDIN.readlines.each { | line |
  line.chomp!
  (date,value) = line.split(",")
  if value.nil? then
  	change = last_change
    value = last_value
  else
  	change = (value.to_f-benchmark)/benchmark
    last_change = change
    last_value = value
  end
  output["days"].push({:date=>date,:change=>change})
}

puts JSON.generate(output,{:indent => "  ",:object_nl => "\n"})

