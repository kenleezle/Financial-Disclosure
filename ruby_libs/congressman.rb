class Congressman

  attr_accessor :name
  attr_accessor :party
  attr_accessor :committee
  attr_accessor :portfolio
  attr_accessor :json

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
    return c
  end
end
