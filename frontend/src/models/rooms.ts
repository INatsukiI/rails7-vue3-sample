import dayjs, { Dayjs } from "dayjs";

export default class Room {
  id: number;
  check: boolean;
  createdAt: Dayjs;
  updatedAt: Dayjs;

  constructor(
    id: number,
    check: boolean,
    createdAt: string,
    updatedAt: string
  ) {
    this.id = id;
    this.check = check;
    this.createdAt = dayjs(createdAt);
    this.updatedAt = dayjs(updatedAt);
  }
}
