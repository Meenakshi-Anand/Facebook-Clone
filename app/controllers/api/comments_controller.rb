class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @post = @comment.post
      render "api/posts/show"
    else
      render json: @comment.errors.full_messages
    end
  end

  def index
    @post = Post.find(params[:id])
    @comments = @post.comments
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      @post = @comment.post
      render "api/posts/show"
    else
      render json: @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    @post = @comment.post
    render "api/posts/show"
  end

  def comment_params
    params.require(:comment).permit(:author_id, :post_id, :body)
  end
end
