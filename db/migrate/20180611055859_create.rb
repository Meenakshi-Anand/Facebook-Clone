class Create < ActiveRecord::Migration[5.2]
  def change
  create_table :friend_requests do |t|
    t.integer :requestor_id,null:false
    t.integer :approver_id,null:false
    t.boolean :approval_status,default:false
    t.timestamps
  end
  add_index :friend_requests, :requestor_id
  add_index :friend_requests, :approver_id
  end
end
