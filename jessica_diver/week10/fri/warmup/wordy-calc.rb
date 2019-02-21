# Wordy Calculator
#
# Write Ruby code that takes word problems in the following formats:
#
# What is 5 plus 13?
# What is 7 minus 5?
# What is -6 multiplied by 4?
# What is 25 divided by -5?
# and returns the answer as an integer.
#
# You should use define a Calculator class which uses the constructor function (initialize) to set the question, and an answer method to return the answer.
#
# Use a regular expression to parse the question.
#
# HINT: You will probably want to use Ruby's match method, and in particular a capture group which uses parentheses in the regex, and returns a MatchData array.

class Calculator

  def initialize question
    @question = question
    matches
  end

  def matches
    @matches = @question.match(/(-?\d+) (plus|minus|multiplied\sby|divided\sby) (-?\d+)/)
  end

  def firstNum
    @matches[1].to_i
  end

  def secondNum
    @matches[3].to_i
  end

  def operator
    case @matches[2]
    when 'plus' then :+
    when 'minus' then :-
    when 'multiplied by' then :*
    when 'divided by' then :/
    end
  end

  def answer
    @answer = firstNum.send(operator, secondNum)  # 10.send(:/, 2)
  end

end

c = Calculator.new('What is 10 divided by 2')

puts "First number: ", c.firstNum
puts "Second number: ", c.secondNum
puts "Operator: ", c.operator
puts "Answer: ", c.answer
