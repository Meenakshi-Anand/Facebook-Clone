json.array! @users do |user|
  json.extract! user, :id, :first_name, :last_name, :profile_img_url
end
