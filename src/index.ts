import {
  Apartment,
  assignApartmentsToPeople,
  Person,
} from "./assignPeopleToApartments";

let a1 = new Apartment(101, 1);
let a2 = new Apartment(102, 2);
let a3 = new Apartment(103, 1);
let a4 = new Apartment(104, 3);
let apartments = [a1, a2, a3, a4];
let p1 = new Person("Alex", true);
let p2 = new Person("Bob", false);
let p3 = new Person("Abby", true);
let p4 = new Person("Maria", false);
let p5 = new Person("Fillipo", true);
let p6 = new Person("Vikki", true);
let p7 = new Person("Charles", true);
let people = [p1, p2, p3, p4, p5, p6, p7];

let result = assignApartmentsToPeople(apartments, people);
console.log(result);
