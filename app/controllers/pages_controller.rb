class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home show about]
  # before_action :set_post, only: %i[ home ]


  def home
    @posts = Post.all.order('created_at DESC')
    # @post = Post.find(params[:id])
  end

  def profile
    @posts = Post.all.order('created_at DESC').where(user_id: current_user)
  end

  def about
  end

  # private

  # def set_post
  #   @post = Post.find(params[:id])
  # end

  # def post_params
  #   params.require(:post).permit(:name, :description, :content, :user_id)
  # end

end
