class Portfolio
  attr_accessor :holdings

  def max_perf_in_dollars_for_time_range(time_range)
  end
  def min_perf_in_dollars_for_time_range(time_range)
  end
  def max_perf_in_pct_for_time_range(time_range)
  end
  def min_perf_in_pct_for_time_range(time_range)
  end
  def + (portfolio)
    retval = Portfolio.new
    retval.holdings = holdings + portfolio.holdings
    return retval
  end
end
