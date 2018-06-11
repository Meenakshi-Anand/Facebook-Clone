json.array! @users do |user|
  json.extract! user, :id, :fname, :lname, :birthday,:sex
  json.profile_image_url asset_path(user.profile_image_url.url)
  json.cover_image_url asset_path(user.cover_image_url.url)
end
