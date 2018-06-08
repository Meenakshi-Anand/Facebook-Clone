class AddAttachmentImageToPosts < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :profile_image_url
    end
  end

  def self.down
    remove_attachment :users, :profile_image_url
  end
end
