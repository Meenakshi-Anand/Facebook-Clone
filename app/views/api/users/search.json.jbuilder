json.array! @users do |user|
  json.extract! user, :id, :fname, :lname, :birthday,:sex
  json.profile_image_url asset_path(user.profile_image_url.url)
  json.cover_image_url asset_path(user.cover_image_url.url)
  json.friends do
    json.array! user.accepted_friends_ids
  end
  json.friend_requests do
    json.array! user.incoming_pending_friends_ids
  end
  json.friend_requested do
    json.array! user.outgoing_pending_friends_ids
  end
end
