class Api::FriendRequestsController < ApplicationController
  def index
    @friends = FriendRequest.find(params[:id]).accepted_friend_ids
    @users = @friends
    render "api/users/index"
  end

  def create
    @friend_request = FriendRequest.new(friendRequest_params)
    if @friend_request.save
      @user = current_user
      render "api/users/show"
    else
      render ["Error in Friend Request"], status: 422
    end
  end

  def update
    @friend_request = FriendRequest.find(params[:id])
    @friend_request.approval_status = true
    if @friend_request.save
      @user = current_user
      render "api/users/show"
    else
      render ["Error Approving Friend Request"], status: 422
    end
  end

  def destroy
    @friend_request = FriendRequest.find(params[:id])
    @friend_request.destroy
    @user = current_user
    render "api/users/show"
  end


  def friendRequest_params
    params.require(:friendRequest).permit(:requestor_id, :approver_id, :approval_status)
  end
end
