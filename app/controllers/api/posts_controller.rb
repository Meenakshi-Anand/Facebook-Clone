class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  def index
    @posts = Post.find_by_wall_id(params[:id])
    render :index
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
    params.require(:post).permit(:author_id, :wall_id, :body)
  end

end