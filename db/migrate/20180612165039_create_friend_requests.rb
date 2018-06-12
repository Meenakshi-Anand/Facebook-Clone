class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :requestor_id, null:false
      t.integer :approver_id, null:false
      t.string :approval_status, default:'pending'
      t.timestamps
    end
    add_index :friend_requests,[:requestor_id,:approver_id],unique:true
  end
end
