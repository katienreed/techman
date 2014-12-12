class ProfileController < ApplicationController
  def index
  	@current_user = User.find(session[:user_id])
  	if @current_user.games === nil
  		@score = 0
  	else
  	@score = @current_user.games / @current_user.wins
  	end
	end
end
