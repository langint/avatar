class CreateImagepointers < ActiveRecord::Migration
  def change
    create_table :imagepointers do |t|

      t.timestamps
    end
  end
end
