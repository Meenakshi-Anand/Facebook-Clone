class Remove < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :profile_image_url
    remove_column :users, :cover_image_url
  end
end
