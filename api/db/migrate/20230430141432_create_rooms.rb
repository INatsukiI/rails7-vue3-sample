class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.boolean :check, null: false, default: false
      t.timestamps
    end
  end
end
