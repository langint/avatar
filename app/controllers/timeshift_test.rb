# Timeshift Utility Testing code
# To run the test type ruby timeshift_test.rb


load 'timeshift.rb'

puts 'TESTING TIMESHIFT UTILITY'

puts 'Case 1: checking response to wrong input - arguments missing'
puts 'Expected a warning message:'
t=Timeshift.new("12:31 PM")
puts '------------------------------------'

puts 'Case 2: checking response to wrong input - wrong time datatype: time=22'
puts 'Expected a warning message:'
t=Timeshift.new(22,12).add_time
puts '------------------------------------'

puts 'Case 3: checking response to wrong input - wrong time shift datatype: timeshift="time shift"'
puts 'Expected a warning message:'
t=Timeshift.new("12:31 PM","time shift").add_time
puts '------------------------------------'

puts 'Case 4: checking response to wrong input - wrong time format: time=12:1 PM'
puts 'Expected a warning message:'
t=Timeshift.new("12:1 PM",23).add_time
puts '------------------------------------'


puts 'Case 5: adding 30 minutes to 01:21 AM' 
t=Timeshift.new("01:21 AM",30).add_time
puts "Expected 01:51 AM"
puts '------------------------------------'

puts 'Case 6: Passing to the next hour by adding 30 minutes to 01:31 AM' 
t=Timeshift.new("01:31 AM",30).add_time
puts "Expected 02:01 AM"
puts '------------------------------------'

puts 'Case 7: Changing from AM to PM by adding 30 minutes to 11:31 AM' 
t=Timeshift.new("11:31 AM",30).add_time
puts "Expected 12:01 PM"
puts '------------------------------------'

puts 'Case 8: Changing from AM to PM by adding 90 minutes to 11:31 AM' 
t=Timeshift.new("11:31 AM",90).add_time
puts "Expected 01:01 PM"
puts '------------------------------------'

puts 'Case 9: Changing from PM to AM (next day) by adding 30 minutes to 11:31 PM' 
t=Timeshift.new("11:31 PM",30).add_time
puts "Expected 00:01 AM"
puts '------------------------------------'

puts 'Case 10: Changing from PM to AM (next day) by adding 90 minutes to 11:31 PM' 
t=Timeshift.new("11:31 PM",90).add_time
puts "Expected 01:01 AM"
puts '------------------------------------'

puts 'Case 11: Several day span by adding 48 hours to 11:31 PM' 
t=Timeshift.new("11:31 PM",2880).add_time
puts "Expected 11:31 PM"
puts '------------------------------------'