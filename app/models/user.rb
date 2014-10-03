class User < ActiveRecord::Base
attr_accessible :avatar, :time_updated, :first_name

  def self.register(user,avatar)
	self.update(user,:avatar=>avatar, :time_updated=>Time.now)
  end

end
