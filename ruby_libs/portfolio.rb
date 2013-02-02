class Portfolio
  attr_accessor :holdings

  def max_perf_in_pct_for_time_range(time_range)
    total_invested = 0
    total_gain = 0
    holdings.select!{ | h | h.overlaps_with_time_range(time_range) }
    holdings.each { | h |
      total_invested += h.best_case_dollars_invested
      total_gain += h.best_case_dollars_gained
    }
    return total_gain / total_invested
  end
  def min_perf_in_pct_for_time_range(time_range)
    total_invested = 0
    total_gain = 0
    holdings.select!{ | h | h.overlaps_with_time_range(time_range) }
    holdings.each { | h |
      total_invested += h.worst_case_dollars_invested
      total_gain += h.worst_case_dollars_gained
    }
    return total_gain / total_invested
  end
  def + (portfolio)
    retval = Portfolio.new
    retval.holdings = holdings + portfolio.holdings
    return retval
  end
end
