json.extract! @user, :id, :fname, :lname, :email, :bio, :birthday, :sex
json.profile_image_url asset_path(@user.profile_image_url.url)
json.cover_image_url asset_path(@user.cover_image_url.url)
# json.friend_requests do
#     json.friends do
#     json.userId @user.id
#     @user.accepted_friends.each { |friend| json.set! friend.id, friend }
#     end
#     json.requests_to do
#     json.userId @user.id
#     @user.requested_friend_requests.each { |request| json.set! request.requestor_id, request }
#     end
#     json.requests_from do
#       json.userId @user.id
#       @user.received_friend_requests.each { |request| json.set! request.acceptor_id, request }
#     end
# end
