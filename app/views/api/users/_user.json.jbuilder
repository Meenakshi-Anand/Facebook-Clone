json.extract! user, :id,:email,:fname,:lname,:birthday,:sex
json.profile_image_url asset_path(user.profile_image_url.url)
