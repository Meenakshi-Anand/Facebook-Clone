class FriendRequest < ApplicationRecord
 validates :requestor_id, :approver_id, :status, presence: true
 validates :requestor_id, uniqueness: { scope: :approver_id }
 validates :status, inclusion: { in: %w(pending accepted denied) }

 belongs_to :requestor,
   primary_key: :id,
   foreign_key: :requestor_id,
   class_name: :User

 belongs_to :approver,
   primary_key: :id,
   foreign_key: :receiver_id,
   class_name: :User
end
