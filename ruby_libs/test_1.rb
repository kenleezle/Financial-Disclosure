require 'json'
require './congressman.rb'

json = JSON.load File.new("../mock_json/OfficialX.json").read
puts "loaded json:"+ json.to_s

time_range = (Time.new('2006-01-01')..Time.new('01-01-2012'))

c = Congressman.create_from_json(json)
puts c.name
puts c.portfolio_aggregate_for_time_range(time_range)
#puts c.to_json
#puts c.to_s
