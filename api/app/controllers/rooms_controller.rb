class RoomsController < ApplicationController
  def getAll
    render json: Room.all
  end

  def enterRoom
    user = User.new(user_params)
    user.room_id = params[:id]
    if user.save
      render json: user, status: 201
    else
      render json: user.errors.full_messages, status: 400
    end
  end

  def getRoomInUsers
    room = Room.find(params[:id])
    users = room.users

    if users.size == 4
      room.update(check: true)
    end
    render json: users
  end

  private
  def user_params
    params.require(:user).permit(:name)
  end
end
