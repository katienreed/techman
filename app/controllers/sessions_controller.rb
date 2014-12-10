class SessionsController < ApplicationController
  def new
  end

  def create
  	@user = User.where(email: params[:email]).first

  	if @user && @user.password == params[:password]
  		session[:user_id] = @user.id
  		flash[:notice] = "Welcome in"
  		redirect_to "/profile/"
  	else
  		flash[:alert] = "Wrong info"
  		redirect_to "/sessions/new"
  end

  def destroy
  	session[:user_id] = nil
  	redirect_to "/"
  end

  private

  def sessions_params
  	params.require(:user).permit(:email,:password)
  end
end
