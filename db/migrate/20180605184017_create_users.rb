class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :email, null: false
      t.string :sex, null: false
      t.text :bio, null: false
      t.datetime :birthday, null: false
      t.string :profile_image_url, null: false
      t.string :cover_image_url, null: false
      t.string :password_digest, null: false
      t.string :session_token, null:false
      t.timestamps
    end
    add_index :users,:email,unique:true
    add_index :users,:session_token,unique:true
  end
end
