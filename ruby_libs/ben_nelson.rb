require 'json'

ben = JSON.load File.new("./Ben_Nelson.json").read
puts JSON.generate(ben,{:indent => "  ",:object_nl => "\n"})
