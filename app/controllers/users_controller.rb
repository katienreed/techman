class UsersController < ApplicationController

  def create
  	@user = User.new(user_params)
  		if @user.save
  			session[:user_id] = @user.id
  			flash[:notice] = "You have signed up to Techman"
  			redirect_to "/profile"
  		else
  			flash[:alert] = @user.errors.full_messages
  			redirect_to "/"
      end
  end

  private

  def user_params
    params.require(:user).permit(:username,:password)
  end
end
