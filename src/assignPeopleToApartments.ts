// Your organization has hired interns who need to relocate for the summer. You are in charge of assigning apartments to them.
// Each intern will get their own room. They can choose whether they prefer to share a 2+ room apartment or get a one-bedroom to themselves.
// Note that they may not get what they want because the apartments vary in the number of rooms that they have.
// Implement a solution that will assign the interns to a room in an apartment.

// 1. Separate multi room and single room apartments
// 2. Separate people by wants_roomate and !wants_roomate
// 3. Iterate over !wants_roomate list and fill single room apartments
// 4. Iterate over wants_roomate list and fill multi room apartments

// Input
// Apartments
// {
// {101, 1}, {102, 2}, {103, 1}, {104, 3}
// }
// People
// {
// {"Alex", true}, {"Bob", false}, {"Abby", true}, {"Maria", false}, {"Filippo", true}, {"Vikki", true},  {"Charles", true}
// }

// { {101, ["Bob"]}, { 102, ["Alex", "Abby"] }, { 103, ["Maria"] }, { 104, ["Vikki", "Filippo", "Charles"] } }

export class Person {
  constructor(
    public name: string = "",
    public wants_roomate: boolean = false
  ) {}
}
export class Apartment {
  constructor(
    public apt_number: number = 0,
    public num_rooms: number = 1,
    public roomates: string[] = []
  ) {}
}

export interface AssignedApartments {
  [key: number]: string[];
}

export function assignApartmentsToPeople(
  apartments: Apartment[],
  people: Person[]
): AssignedApartments {
  let singleRoomApts = apartments.filter((a) => a.num_rooms == 1);
  let multiRoomApts = apartments
    .filter((a) => a.num_rooms > 1)
    .sort((a, b) => a.num_rooms - b.num_rooms);
  let doesntWantRoomates = people.filter((p) => !p.wants_roomate);
  let wantsRoomates = people.filter((p) => p.wants_roomate);
  let finishedRooms: AssignedApartments = {};
  // iter over dwr, pop singleRoomApts, add name to roomates, add room to finished list
  for (let i = 0; i < doesntWantRoomates.length; i++) {
    let person = doesntWantRoomates[i];
    if (singleRoomApts.length) {
      let apt = singleRoomApts.pop();
      if (apt) {
        apt?.roomates.push(person.name);
        finishedRooms[apt.apt_number] = apt.roomates;
      }
    } else if (multiRoomApts.length) {
      let apt = multiRoomApts.pop();
      if (apt) {
        apt?.roomates.push(person.name);
        finishedRooms[apt.apt_number] = apt.roomates;
      }
    }
  }
  // iter over wr, pop multiroom apt, add name to roomates, if apt roomates.length == num_rooms, add to finished
  for (let i = 0; i < wantsRoomates.length; i++) {
    let person = wantsRoomates[i];
    if (multiRoomApts.length) {
      let apt = multiRoomApts.pop();
      if (apt) {
        apt.roomates.push(person.name);
        if (apt.roomates.length == apt.num_rooms) {
          finishedRooms[apt.apt_number] = apt.roomates;
        } else {
          multiRoomApts.push(apt);
          finishedRooms[apt.apt_number] = apt.roomates;
        }
      }
    }
  }
  return finishedRooms;
}
