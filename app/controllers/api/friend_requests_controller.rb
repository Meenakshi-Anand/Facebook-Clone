class Api::FriendRequestsController < ApplicationController
  def create
     @friend_request= FriendRequest.new(friend_request_params)
     if @friend_request.save
       @user = current_user
       render "api/users/show"
     else
       render ["Error Creating Friend_request"], status: 422
     end
 end

   def update
     @friend_request= FriendRequest.find(params[:id])
     @friend_request.approved = true
     if @friend_request.save
       @user = current_user
       render "api/users/show"
     else
       render ["Error Approving Friend_request"], status: 422
     end
   end

   def destroy
     @friend_request= FriendRequest.find(params[:id])
     @friend_request.destroy
     @user = current_user
     render "api/users/show"
   end


   def friend_request_params
     params.require(:friendship).permit(:requestor_id, :approver_id, :approval_status)
   end


end
