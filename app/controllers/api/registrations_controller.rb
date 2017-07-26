class Api::RegistrationsController < ApplicationController

  def create
  	@registration = Registration.new(registration_params)
  	if @registration.save
      @event = @registration.event
  		render "api/events/show"
  	else
  		render json: @registration.errors.full_messages, status: 422
  	end
  end

  def destroy
    # @registration = Registration.find(params[:id])
    @event = Event.find_by(id: params[:event_id])
    if @event
      currentUser.registrations.delete(@event)
    # @registration.destroy
      render "api/events/show"
    else
      render json: ["Event doesn't exist"]
    end
  end

  def index
    @registrations = Registration.all
  end



  private

  def registration_params
    params.require(:registration).permit(:event_id, :user_id)
  end
end
