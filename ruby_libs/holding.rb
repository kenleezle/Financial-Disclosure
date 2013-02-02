class Holding
  attr_accessor :congressman
  attr_accessor :bought_date, :sold_date
  attr_accessor :performance
  attr_accessor :min_dollars_held, :max_dollars_held

  def went_up?
    return true if performance > 0
  end
  def matchesTimeRange?(time_range)
    return true if time_range.includes?(bought_date)
    return true if time_range.includes?(sold_date)
    return false
  end
  def best_case_dollars_performance
    if went_up? then
     return max_dollars_held*performance
    else
      return min_dollars_held*performance
    end
  end
  def worst_case_dollars_performance
    if went_up? then
     return min_dollars_held*performance
    else
      return max_dollars_held*performance
    end
  end
end
