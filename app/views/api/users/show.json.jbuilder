json.extract! @user, :id, :fname, :lname, :email, :profile_image_url, :cover_image_url, :bio, :birthday, :sex

json.friend_requests do
    json.friends do
    json.userId @user.id
    @user.accepted_friends.each { |friend| json.set! friend.id, friend }
    end
    json.requests_to do
    json.userId @user.id
    @user.requested_friendships.each { |request| json.set! request.requestor_id, request }
    end
    json.requests_from do
      json.userId @user.id
      @user.received_friendships.each { |request| json.set! request.acceptor_id, request }
    end
end
