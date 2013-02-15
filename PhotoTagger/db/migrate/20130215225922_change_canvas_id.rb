class ChangeCanvasId < ActiveRecord::Migration
  def change
    change_column :faceboxes, :canvas_id, :string
  end
end
