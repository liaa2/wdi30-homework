# def sum_integers(filename)
#   sum = 0
#
#   file = File.new filename
#   file.each_line do |line|
#     sum += line.to_i
#   end
#
#   sum
# end

def sum_integers(filename)
  File.readlines(filename).map(&:to_i).inject(:+)
end

puts sum_integers('integers.txt')

# require 'pry'
# binding.pry
