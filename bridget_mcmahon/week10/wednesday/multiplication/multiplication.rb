def twelve_times_table
  (0..12).each do |m|
    puts sprintf("%2d x 12 = %3d", m, m * 12)
  end
end

twelve_times_table()
