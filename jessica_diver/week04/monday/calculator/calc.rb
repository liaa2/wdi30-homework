require 'pry'
require 'rainbow'
# binding.binding.pry

def show_menu
  puts "CALCULATOR"
  puts "-=" * 30
  puts "~ Menu ~"
  puts "[a] - Addition"
  puts "[s] - Subtract"
  puts "[m] - Multiply"
  puts "[d] - Divide"
  puts "[q] - Quit"
  print "Enter your selection: "
end

def add(a, b)
  a + b
end

def subtract(a, b)
  a - b
end

def multiply(a, b)
  a * b
end

def divide (a, b)
  a / b
end

# show menu

show_menu
menu_choice = gets.chomp.downcase

# get the user choice

puts "You entered: #{ menu_choice } "

# until the user quits
until menu_choice == 'q'
  case menu_choice
  when 'a'

    print "First number: "
    number_1 = gets.to_i
    print "Second number: "
    number_2 = gets.to_i
    answer = add number_1, number_2
    puts ""
    puts "ANSWER: #{ answer }"
    puts ""

  when 's'

    print "First number: "
    number_1 = gets.to_i
    print "Second number: "
    number_2 = gets.to_i
    answer = subtract number_1, number_2
    puts ""
    puts "ANSWER: #{ answer }"
    puts ""

  when 'm'

    print "First number: "
    number_1 = gets.to_i
    print "Second number: "
    number_2 = gets.to_i
    answer = multiply number_1, number_2
    puts ""
    puts "ANSWER: #{ answer }"
    puts ""

  when 'd'

    print "First number: "
    number_1 = gets.to_i
    print "Second number: "
    number_2 = gets.to_i
    answer = divide number_1, number_2
    puts ""
    puts "ANSWER: #{ answer }"
    puts ""

else
  puts "Invalid selection"
end

  show_menu
  menu_choice = gets.chomp.downcase
end
  # do the math
  # show the menu
  # get the user choice
