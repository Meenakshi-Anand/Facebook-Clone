# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create!(email:'abhi@codeanand.com',password:'password',fname:'Meenakshi',
lname:'Anand',sex:'F',birthday:Date.new(),bio: "Great things are done by a series
 of small things brought together" )

u2 = User.create!(email:'anand@codeanand.com',password:'password',fname:'Anand',
lname:'Narayan',sex:'M',birthday:Date.new(),bio:"Love the beaches")

u3 = User.create!(email:'smriti@codeanand.com',password:'password',fname:'Smriti',
lname:'Anand',sex:'F',birthday:Date.new(),bio:"cuppy cake")

u4 = User.create!(email:'samantha@codeanand.com',password:'password',fname:'Samantha',
lname:'Diwedi',sex:'F',birthday:Date.new(),bio:":Love cooking ....")

u5 = User.create!(email:'dhivya@codeanand.com',password:'password',fname:'Dhivya',
lname:'Sashidar',sex:'F',birthday:Date.new(),bio:":Love the beaches..")

u6 = User.create!(email:'dhisha@codeanand.com',password:'password',fname:'Dhisha',
lname:'Diwedi',sex:'F',birthday:Date.new(),bio:":Love the beaches")

u7 = User.create!(email:'shivane@codeanand.com',password:'password',fname:'Shivane',
lname:'Diwedi',sex:'F',birthday:Date.new(),bio:":Love the beaches")

u8 = User.create!(email:'sam@codeanand.com',password:'password',fname:'Sam',
lname:'Sam',sex:'F',birthday:Date.new(),bio:":Love the beaches")

u9 = User.create!(email:'ruhi@codeanand.com',password:'password',fname:'Ruhi',
lname:'fsf',sex:'F',birthday:Date.new(),bio:":Love the beaches")

u10 =User.create!(email:'anandf@codeanand.com',password:'password',fname:'Anand',
lname:'Narayan',sex:'F',birthday:Date.new(),bio:":Love the beaches")

FriendRequest.destroy_all

FriendRequest.create!(requestor_id:u1.id,approver_id:u2.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u1.id,approver_id:u3.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u1.id,approver_id:u4.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u1.id,approver_id:u5.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u1.id,approver_id:u6.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u1.id,approver_id:u7.id,approval_status:"accepted")

FriendRequest.create!(requestor_id:u2.id,approver_id:u8.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u2.id,approver_id:u3.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u2.id,approver_id:u4.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u2.id,approver_id:u5.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u2.id,approver_id:u6.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u2.id,approver_id:u7.id,approval_status:"accepted")

FriendRequest.create!(requestor_id:u3.id,approver_id:u10.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u3.id,approver_id:u8.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u3.id,approver_id:u4.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u3.id,approver_id:u5.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u3.id,approver_id:u6.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u3.id,approver_id:u7.id,approval_status:"accepted")

FriendRequest.create!(requestor_id:u4.id,approver_id:u8.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u4.id,approver_id:u9.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u4.id,approver_id:u10.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u4.id,approver_id:u5.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u4.id,approver_id:u6.id,approval_status:"accepted")
FriendRequest.create!(requestor_id:u4.id,approver_id:u7.id,approval_status:"accepted")


Post.destroy_all

Comment.destroy_all
