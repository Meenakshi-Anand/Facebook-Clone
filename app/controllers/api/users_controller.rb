class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = current_user
    if @user
      if @user.update(user_params)
        render :show
      else
        render json: @user.errors, status: 400
      end
    else
      render json: ["No user found"], status: 404
    end
  end

  def search
  @users = User.search_names(params[:query])
  render :search
  end

  private

  def user_params
    params.require(:user).permit(:email, :password,:fname, :lname,
       :birthday,:sex,:profile_image_url,:cover_image_url)
  end
end
