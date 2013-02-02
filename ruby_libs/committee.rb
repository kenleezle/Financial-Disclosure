class Committee
  attr_accessor :congressmen
  attr_accessor :name
  def portfolio
    p = Portfolio.new
    p.holdings = congressmen.collect { | c | c.holdings }.flatten
    return p
  end
end
