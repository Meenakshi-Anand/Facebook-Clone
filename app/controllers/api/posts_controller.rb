class Api::PostsController < ApplicationController
  def index
    @users = User.all
    @posts = Post.all
    if params[:userId]
      @posts = Post.where("author_id = ? AND wall_id IS NULL", params[:userId])
        .or(Post.where(["wall_id = ?", params[:userId]]))
    end

    if @posts.empty?
      render :empty
    else
      render :index
    end
  end
  
  def feed
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show
  end

  def post_params
    params.require(:post).permit(:author_id,:wall_id,:body,:photo)
  end

end
