import axios from "../axios";
import Room from "../models/rooms";
import User from "../models/users";

function createUserFromResponse(res: any): Room {
  return new Room(res.id, res.name, res.created_at, res.updated_at);
}

export const getRooms: () => Promise<Room[]> = async () => {
  const res = await axios.get("/api/rooms");
  return res.data.map((res: any) => createUserFromResponse(res));
};

export interface UserCreateParams {
  name: String;
}

export const enter: (
  params: UserCreateParams,
  roomId: string
) => Promise<Room> = async (params: UserCreateParams, roomId: string) => {
  const res = await axios.post(`/api/room/${roomId}`, { user: params });
  return createUserFromResponse(res.data);
};

export const getRoomInUsers: (roomId: string) => Promise<User[]> = async (
  roomId: string
) => {
  const res = await axios.get(`/api/room/${roomId}`);
  return res.data;
};
