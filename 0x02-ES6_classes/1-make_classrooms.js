import ClassRoom from './0-classroom';

const classr = new ClassRoom(19);
const classr1 = new ClassRoom(20);
const classr2 = new ClassRoom(34);

export default function initializeRooms() {
  return [classr, classr1, classr2];
}
