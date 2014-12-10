class UserController < ApplicationController
  def new
  	@user = User.new
  end

  def create
  	@user = User.new(user_params)
  		if @user.save
  			session[:user_id] = @user.user_id
  			flash[:notice] = "You have signed up to Techman"
  			redirect_to "/profile/"
  		else
  			flash[:alert] = @user.errors.full_messages
  			redirect_to "/users/new"
      end
  end

  private

  def user_params
    params.require(:user).permit(:email,:password)
  end
end
