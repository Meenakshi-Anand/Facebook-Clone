class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :wall_id ,:integer,null:false
    add_index :posts,:wall_id
  end
end
