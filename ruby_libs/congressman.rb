require './portfolio.rb'
require './holding.rb'
class Congressman

  attr_accessor :name
  attr_accessor :committee
  attr_accessor :holdings
  attr_accessor :json

  def Congressman.initialize
    @holdings = Array.new
  end

  def Congressman.find_all_by_committee
  end

  def Congressman.find_all_by_party
  end

  def Congressman.find_by_name
  end

  def Congressman.unique_list_of_committees
  end
  def Congressman.create_from_json(json)
    c = Congressman.new
    c.json = json
    c.name = json["Official"]["Name"]
    c.holdings = json["Official"]["Stockholdings"].collect { | sh |
      Holding.create_from_json(sh)
    }
    return c
  end
  def portfolio_aggregate_for_time_range(time_range)
    p = PortfolioAggregate.new
    p.holdings = holdings.select!{ | h | h.overlaps_with_time_range?(time_range) }
    return p
  end
end
