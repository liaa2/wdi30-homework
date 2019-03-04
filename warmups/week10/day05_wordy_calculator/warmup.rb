class Calculator

  def initialize question
    @question = question
    matches
  end

  def matches
    @matches = @question.match(/(-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)/)
    @matches
  end

  def first_number
    @matches[1].to_i
  end

  def second_number
    @matches[3].to_i
  end

  def operation
    case @matches[2]
    when "plus" then :+
    when "minus" then :-
    when "multiplied by" then :*
    when "divided by" then :/
    end
  end

  def answer
    @answer = first_number.send(operation, second_number)
  end

end

c = Calculator.new("What is 10 divided by 2?")

p c.matches
puts c.first_number
puts c.operation
puts c.second_number
puts c.answer
