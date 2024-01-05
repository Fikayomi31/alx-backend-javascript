import ClassRoom from './0-classroom';

export default function initialzeRoom () {
  const roomSize = [19, 20, 34];
  return roomSize.map((value) => new ClassRoom(value));
}
