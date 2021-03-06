class Api::UsersController < ApplicationController
  def create
  	@user = User.new(user_params)

  	if @user.save
  		sign_in(@user)
  		render "api/users/show"
  	else
  		render json: @user.errors.full_messages, status: 422
  	end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(city_id: user_params[:city_id])
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = Event.all.map { |e| e.host }
  end

  private

  def user_params
  	params.require(:user).permit(:email, :password, :first_name, :last_name, :city_id)
  end
end
