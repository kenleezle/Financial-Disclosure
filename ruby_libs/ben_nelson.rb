require 'json'

ben = JSON.load STDIN.read
puts JSON.generate(ben,{:indent => "  ",:object_nl => "\n"})
