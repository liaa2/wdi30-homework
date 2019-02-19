# Homework: write a fast recursive Fibonacci function

$memory = {
    1 => 1,
    2 => 1
} # caching
def fibonacci_recursive(n)
    if $memory[n].nil?
        $memory[n] = fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
    else
        $memory[n]
    end
end

require'pry'
binding.pry



