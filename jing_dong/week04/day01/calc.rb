require 'pry'

# binding.pry

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Substraction"
  puts "[m] - Multiply"
  puts "[d] - Divide"
  puts "[e] - Exponents"
  puts "[r] - Square roots"
  puts "[o] - Mortgage"
  puts "[b] - BMI"
  puts "[t] - Trip"
  puts "[q] - quit"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

puts "You entered: #{ menu_choice }."

until menu_choice == 'q'
  #do actual calculation
  case menu_choice
  when 'a'
    puts "Enter your first number: "
    a = gets.to_f
    puts "Enter your second number: "
    b = gets.to_f
    a + b
    puts "the answer is #{a + b}"
  when 's'
    puts "Enter your first number: "
    a = gets.to_i
    puts "Enter your second number: "
    b = gets.to_i
    a - b
    puts "the answer is #{a - b}"
    #puts "Substraction coming soon"
  when 'm'
    puts "Enter your first number: "
    a = gets.to_i
    puts "Enter your second number: "
    b = gets.to_i
    puts "the answer is #{a * b}"
    #puts "Multiply is coming"
  when 'd'
    puts "Enter your first number: "
    a = gets.to_i
    puts "Enter your second number: "
    b = gets.to_i
    puts "the answer is #{a / b}"
    #puts "Division is coming"
  when 'e'
    puts "Enter your base number: "
    a = gets.to_i
    puts "Enter your exponent: "
    b = gets.to_i
    puts "the answer is #{a ** b}"
    #puts "Expnents is coming"
  when 'r'
    puts "Find the square root of: "
    a = gets.to_f
    puts "the answer is #{Math.sqrt(a)}"
    #puts "Square roots is coming"
  when 'o'

  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this"

# show menu
# get the user choice

# until the user quits
 # do their mathematics
 # show menu
 # get the user choice
