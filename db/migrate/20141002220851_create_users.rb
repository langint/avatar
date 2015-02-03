class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, limit: 30
      t.string :city, limit: 30
      t.string :country, limit: 30
      t.datetime :time_updated
     end
  end
end
