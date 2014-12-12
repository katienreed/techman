class HomeController < ApplicationController
  def index
  	@user = User.new
  end
  def game
  	@current_user = User.find(session[:user_id])  	
  end
  def win
  	@current_user = User.find(session[:user_id])
  	@current_user.wins + 1
  	redirect_to "/profile"
  end
end
