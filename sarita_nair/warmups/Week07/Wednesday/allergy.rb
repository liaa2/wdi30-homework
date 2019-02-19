class Allergies
  def initialize
    @allergy={
      "cats" => 128,
      "pollen" => 64,
      "chocolate" => 32,
      "tomatoes" => 16,
      "strawberries" => 8,
      "shellfish" => 4,
      "peanuts" => 2,
      "eggs" => 1
    }
  end
  def detectallergy(score)
    @items = Array.new
    @allergy.each do |key,value|
      while score >= value
        score -= value
        @items.push(key)
      end
    end
    # puts score
    # puts @items
    if score == 0
      puts "The person is allergic to following items:"

      @items.each do |key,value|
        puts key
      end
    end
  end
end

allergy = Allergies.new
allergy.detectallergy(34)
