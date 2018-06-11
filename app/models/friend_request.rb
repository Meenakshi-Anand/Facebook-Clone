class FriendRequest < ApplicationRecord
validates :requestor_id,:approver_id,presence:true
validates :approval_status,inclusion: { in: [true, false] }

belongs_to :requestor,
primary_key: :id,
foreign_key: :requestor_id,
className: :User

belongs_to :approver,
primary_key: :id,
foreign_key: :approver_id,
className: :User

end
