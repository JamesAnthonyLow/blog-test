require 'date'
class Entry
  attr_reader :name, :date
  def initialize str
    @name = str.scan(/\D+/).first
    @date = Date.new(*date_arr(str)).strftime("%A, %B, %e, %Y")
  end
  def self.parse path
    Dir["#{path}/*"].map do |d| 
      new File.basename(d).gsub("_", " ")
    end
  end
  private
  def date_arr entry
    month, day, year = entry.scan(/\d+/).map(&:to_i)
    [year, month, day]
  end
end
