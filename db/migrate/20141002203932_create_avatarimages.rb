class CreateAvatarimages < ActiveRecord::Migration
  def change
    create_table :avatarimages do |t|

      t.timestamps
    end
  end
end
