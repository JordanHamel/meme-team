class CreateFaceboxes < ActiveRecord::Migration
  def change
    create_table :faceboxes do |t|
      t.integer :canvas_id
      t.string :name
      t.integer :coordx
      t.integer :coordy

      t.timestamps
    end
  end
end
