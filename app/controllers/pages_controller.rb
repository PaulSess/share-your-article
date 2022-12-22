class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home about]

  def home
    @posts = Post.all.order('created_at DESC')
  end

  def about
  end
end
