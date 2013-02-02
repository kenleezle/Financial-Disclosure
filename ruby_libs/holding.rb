class Holding
  attr_accessor :congressman
  attr_accessor :bought_date, :sold_date
  attr_accessor :performance
  attr_accessor :min_dollars_invested, :max_dollars_invested

  def went_up?
    return true if performance > 0
  end
  def overlaps_with_time_range?(time_range)
    return true if time_range.includes?(bought_date)
    return true if time_range.includes?(sold_date)
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
end
