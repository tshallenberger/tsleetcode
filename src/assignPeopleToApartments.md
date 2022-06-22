Your organization has hired interns who need to relocate for the summer. You are in charge of assigning apartments to them.
Each intern will get their own room. They can choose whether they prefer to share a 2+ room apartment or get a one-bedroom to themselves.
Note that they may not get what they want because the apartments vary in the number of rooms that they have.
Implement a solution that will assign the interns to a room in an apartment.

class Apartment {
  int apt_number;
  int num_rooms;
}
class Person {
 string name;
 bool wants_roomate;
}
THOMAS:

(multi ptr scenario)
1. Possibly sort apartments by room count? Desc (high to low)
2. Sort people by wants_roomate? (wants_roomate first)
3. Iterate over apartments
  iterate over people
  pop person off list
  check if wants_roomate

curr_apt
curr_apt_i
curr_person
curr_person_i
iterate over people
  while !curr_person.is_assigned_to_room
    if curr_person !wants_roomate && curr_apt has_people
      curr_apt_i++
      curr_apt = apartments[i]
    else
       curr_apt.roomates.push(curr_person.name)
       curr_person is_assigned_to_room = true;


THOMAS (TAKE 2)

1. Separate multi room and single room apartments
2. Separate people by wants_roomate and !wants_roomate
3. Iterate over !wants_roomate list and fill single room apartments
4. Iterate over wants_roomate list and fill multi room apartments


class Person {
  public name: string;
  public wants_roomate: boolean;
}
class Apartment {
  public apt_number: number;
  public num_rooms: number;
  public roomates: string[];

}

Dictionary<int, List<string>> AssignApartmentsToPeople(
 List<Apartment> apartments,
 List<Person> people) {

}

function assignApartmentsToPeople(apartments: Apartment[], people: Person[]): {[key: number]: string[]} {
    singleRoomApts = apartments.filter(a => num_rooms.length == 1);
    multiRoomApts = apartments.filter(a => num_rooms.length > 1);
    wantsRoomates = people.filter(p => p.wants_roomate)
    doesntWantRoomates = people.filter(p => !p.wants_roomate);

    for (let i = 0; i < doesntWantRoomates.length; i++){
      let person = doesntWantRoomates[i];
      if (singleRoomApts.length){
        let apt = singleRoomApts.pop();
        apt.roomates.push(person.name);
      }
    }
    for (let i = 0; i < wantsRoomates.length; i++){
      let person = wantsRoomates[i];
      if (multiRoomApts.length){

      }
    }
}


Input
Apartments
{
{101, 1}, {102, 2}, {103, 1}, {104, 3}
}
People
{
{"Alex", true}, {"Bob", false}, {"Abby", true}, {"Maria", false}, {"Filippo", true}, {"Vikki", true},  {"Charles", true}
}

{ {101, ["Bob"]}, { 102, ["Alex", "Abby"] }, { 103, ["Maria"] }, { 104, ["Vikki", "Filippo", "Charles"] } }
