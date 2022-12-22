class CommentController < ApplicationController
  def index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.post = Post.find(params[:id])
  end

  def delete
  end

private

# Use callbacks to share common setup or constraints between actions.
  def set_post
    @comment = Comment.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def comment_params
    params.require(:comment).permit(:content, :user_id, :post_id)
  end
end
