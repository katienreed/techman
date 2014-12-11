class HomeController < ApplicationController
  def index
  	@user = User.new
  end
  def game
  	@current_user = User.find(session[:user_id])
  	
  end
end
