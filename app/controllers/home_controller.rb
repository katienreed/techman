class HomeController < ApplicationController
  def index
  	@user = User.new
  end
  def game
  	@current_user = User.find(session[:user_id])  	
  end
  def win
  	@current_user = User.find(session[:user_id])
    if @current_user.wins === nil
      @current_user.wins = 1
    else
    	@current_user.wins = @current_user.wins + 1
    end
    if @current_user.games === nil
      @current_user.games = 1
    else
      @current_user.games = @current_user.games + 1
    end
    @current_user.save
  	redirect_to "/profile"
  end
  def lose
    @current_user = User.find(session[:user_id])
    if @current_user.wins === nil
      @current_user.wins = 0
    end
    if @current_user.games === nil
      @current_user.games = 1
    else
      @current_user.games = @current_user.games + 1  
    end
    @current_user.save
    redirect_to "/profile"
  end
end
