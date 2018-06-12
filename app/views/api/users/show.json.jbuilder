
json.set! @user.id do
  json.extract! @user, :email, :id, :fname, :lname, :birthday,  :sex
  json.profile_image_url asset_path(@user.profile_image_url.url)
  json.cover_image_url asset_path(@user.cover_image_url.url)
  json.friends @user.accepted_friends_ids
  json.friend_requests @user.incoming_pending_friends_ids
  json.friend_requested @user.outgoing_pending_friends_ids
end
