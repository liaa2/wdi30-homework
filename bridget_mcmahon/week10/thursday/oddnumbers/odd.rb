# Write function to print the odd numbers from 1 to 99.

# def odds
#   (1..99).each do |n|
#     puts n if n.odd?
#   end
# end

# odds()

# def print_odd_numbers(upper=99)
#   (upper + 1).times do |n|
#     puts n if n.odd?
#   end
# end
#
# print_odd_numbers()

# 1.step(99, 2).each { |n| puts n }
# (1..99).to_a.select { |n| n.odd? }.each {|n| puts n }
puts 1.step(99,2).to_a.join('\n')
