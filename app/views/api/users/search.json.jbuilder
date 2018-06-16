json.array! @users do |user|
  json.extract! user, :id, :fname, :lname
  json.profile_image_url asset_path(user.profile_image_url.url)
end
