# Find largest integer in an array

a = Array.new(20) { rand(1..100) }

##### ITERATION #####
def find_largest_integer(arr)
  largest = -1.0 / 0.0 # Negative Infinity

  arr.each do |n|
    largest = n if n > largest
  end

  largest
end

##### REDUCE / INJECT #####


##### RECURSION #####


p a
puts find_largest_integer(a)
