class TimeshiftController < ApplicationController
# --Ruby Code Exercise--
# Without using any built in date or time functions, write a function/method that accepts two mandatory arguments (time and minutes) that can be added  toge$
# The first argument is a string of the  format "[H]H:MM {AM|PM}"
# And the second argument is an integer.
# Assume the integer is the number of minutes to add to the string.
# The return value of the function should be a string of the same format as the first argument.

#Required use cases:
# - The method should take into account going over from AM to PM or vice versa.
#- It will also handle going into the next hour.
# - AM/PM should handle upcase or downcase strings.
# - Error handling for mandatory arguments should be included.
# Example inputs with expected outputs:
# - ("9:13 PM", 10) should return "9:23 PM"
# - ("11:50 AM", 12) should return "12:02 PM"

# To run this app type Timeshift.new(time, timeshift).add_time
# Example: Timeshift.new("11:43 AM",34).add_time

def initialize(*args)
  if args.length!=2 
    puts "Wrong number of arguments!"
  else
    @time = args[0]
    @time_shift = args[1]
  end
end

def add_time
  @input_error = validate_input
  unless @input_error.nil?
    puts @input_error
  else
    new_time = time_in_minutes + @time_shift
    hours = new_time/60 % 24
	if hours < 12
    am_pm = 'AM'
	else	
    am_pm = 'PM';hours -= 12
	end
    hours = 12 if am_pm == 'PM' && hours == 0
    minutes = new_time % 60
    puts "The new time is #{hours.to_s.rjust(2,'0')}:#{minutes.to_s.rjust(2,'0')} #{am_pm}"
  end
end
  
def validate_input
  
  unless @time.is_a?(String) || !@time_shift.is_a?(Integer) || @time!~/^[0-1]?\d:[0-5]\d (a|A|p|P)(m|M)$/
    @input_error = "Invalid input"# if @time!~/^[0-1]?\d:[0-5]\d (a|A|p|P)(m|M)$/
  end
  
  if !@input_error
    time_hash = get_time_hash
    if (time_hash[:am_pm] == 'am'&&time_hash[:hours]>11) || (time_hash[:am__pm] = 'pm' && time_hash[:hours] > 12)
      @input_error = "Time input cannot be greater than 11:59 AM or 12:59 PM"
    end
  end
  return @input_error
end
  
def get_time_hash
  @time_hash=Hash[:hours, @time.split(":")[0].to_i, :minutes, @time.split(":")[1].split(" ")[0].to_i, :am_pm, @time.split(" ")[1].downcase]
end
  
def time_in_minutes
  abs_time = @time_hash[:hours]*60 + @time_hash[:minutes]
  abs_time += 720 if @time_hash[:am_pm] == 'pm'
  return abs_time
end

end


