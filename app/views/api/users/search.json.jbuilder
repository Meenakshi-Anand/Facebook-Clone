json.array! @users do |user|
  json.extract! user, :id, :fname, :lname, :profile_image_url
end
