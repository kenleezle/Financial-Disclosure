require 'json'
class PortfolioAggregate
  attr_accessor :holdings

  def max_perf_in_pct
    total_invested = 0
    total_gain = 0
    holdings.each { | h |
      total_invested += h.best_case_dollars_invested
      total_gain += h.best_case_dollars_gained
    }
    return total_gain / total_invested
  end
  def min_perf_in_pct
    total_invested = 0
    total_gain = 0
    holdings.each { | h |
      total_invested += h.worst_case_dollars_invested
      total_gain += h.worst_case_dollars_gained
    }
    return total_gain / total_invested
  end
  def + (portfolio)
    retval = PortfolioAggregate.new
    retval.holdings = holdings + portfolio.holdings
    return retval
  end
  def to_s
    return "min_perf: #{min_perf_in_pct}, max_perf: #{max_perf_in_pct}"
  end
  def to_json
  end
end
