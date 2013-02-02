require 'json'

output = Hash.new
output["name"] = "SP500"
output["days"] = Array.new
benchmark = 1268.80
change = last_change = 0
STDIN.readlines.each { | line |
  line.chomp!
  (date,value) = line.split(",",2)
  if !value.nil? then
  	change = (value.to_f-benchmark)/benchmark
	last_change = change
  else
  	change = last_change
  end
  output["days"].push({:date=>date,:change=>change,:value=>value})
}

puts JSON.generate(output,{:indent => "  ",:object_nl => "\n"})

