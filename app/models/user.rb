class User < ActiveRecord::Base
#  attr_accessible :avatar, :time_updated, :first_name
	has_one :bio
	has_and_belongs_to_many :avatars

end
