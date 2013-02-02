require 'json'

output = Hash.new
output["name"] = "Data Sets"
output["children"] = Array.new
STDIN.readlines.each { | line |
  line.chomp!
  (id,name) = line.split(",",2)
  output["children"].push({:displayName => name, :dataSetId => id})
}

puts JSON.generate(output,{:indent => "  ",:object_nl => "\n"})

