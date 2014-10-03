class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, limit: 30
      t.string :avatar, limit: 32
      t.time :time_updated
     end
  end
end
