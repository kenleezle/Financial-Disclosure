require 'json'
class Holding
  attr_accessor :congressman
  attr_accessor :buy_date, :sell_date
  attr_accessor :performance
  attr_accessor :min_dollars_invested, :max_dollars_invested
  attr_accessor :json

  def went_up?
    return true if performance > 0
  end
  def overlaps_with_time_range?(time_range)
    return true if time_range.cover?(buy_date)
    return true if time_range.cover?(sell_date)
    return false
  end
  def best_case_dollars_invested
    went_up? ? max_dollars_invested : min_dollars_invested
  end
  def worst_case_dollars_invested
    went_up? ? min_dollars_invested : max_dollars_invested
  end
  def best_case_dollars_gained
    best_case_dollars_invested * performance
  end
  def worst_case_dollars_gained
    worst_case_dollars_invested * performance
  end
  def Holding.create_from_json(json)
    h = Holding.new
    h.json = json
    h.buy_date = Time.new(json["Buy"]["Date"])
    h.sell_date = Time.new(json["Sell"]["Date"])
    h.min_dollars_invested = json["Buy"]["ValueRange"]
    h.performance = json["TotalPercentageChange"]
    return h
  end
end
