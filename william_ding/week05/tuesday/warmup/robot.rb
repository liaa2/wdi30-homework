require 'pry'

def random_letter()
  (rand(26) + (rand(2) == 0 ? 65 : 97) ).chr.upcase
end

class Robot
  def initialize()
    @name = random_letter + random_letter + rand(999).to_s
    @instruction_count = 0
    @creation_time = Time.now
  end

   attr_accessor :name, :instruction_count

   def reset()
     @name = random_letter + random_letter + rand(999).to_s
     @instruction_count += 1
     @reboot_time = Time.now
   end

   def timers
     now = Time.now
     elapsed_creation = now - @creation_time
     elapsed_reboot = now - @reboot_time
     puts "#{elapsed_reboot} seconds since last boot, #{elapsed_creation} seconds since creation."
   end
end

# binding.pry
