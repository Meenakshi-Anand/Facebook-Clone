class Api::FriendRequestsController < ApplicationController

  def create
    @friend_request = FriendRequest.new(friend_params)
    if @friend_request.save
      render :show
    else
      render json: @friend_request.errors.full_messages, status: 422
    end
  end

  def index
    @friends = User.find(params[:user_id]).accepted_friends.limit(9)
  end

  def show

  end

  def update
    @friend_request = FriendRequest.find_by(
      approver_id: params[:user_id],
      requestor_id: params[:id]
    )
    if @friend_request.update_attributes(approval_status: params[:friend_request][:approval_status])
      render :show
    else
      render json: @friend_request.errors.full_messages, status: 422
    end
  end

  def destroy
    @friend_request = FriendRequest.find_by(
      approver_id: params[:user_id],
      requestor_id: params[:id]
    )
    if @friend_request.try(:destroy)
      render json: {}
      return
    else
      @friend_request = FriendRequest.find_by(
      approver_id: params[:id],
      requestor_id: params[:user_id]
      )
      if @friend_request.try(:destroy)
        render json: {}
      else
        render json: @friend_request.errors.full_messages, status: 422
      end
    end
  end

  private

  def friend_params
    params.require(:friend_request).permit(:requestor_id, :approver_id,:approval_status)
  end
end
