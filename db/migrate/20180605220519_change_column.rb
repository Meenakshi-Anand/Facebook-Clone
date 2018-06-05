class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    change_column(:users, :sex, :string, {:null => true})
    change_column(:users, :bio, :text, {:null => true})
    change_column(:users, :profile_image_url,:string, {:null => true})
    change_column(:users, :cover_image_url,:string, {:null => true})
  end
end
