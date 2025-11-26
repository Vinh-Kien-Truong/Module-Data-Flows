let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

function getGryffindorStudents(hogwarts) {
  let gryffindorStudents = [];

  for (let person of hogwarts) {
    let { firstName, lastName, house } = person;
    
    if (house === "Gryffindor") {
      //gryffindorStudents.push(`${firstName} ${lastName}`);
      console.log(`${firstName} ${lastName}`);
    }
  }

  //return gryffindorStudents;
}
console.log("Gryffindor Students:");
getGryffindorStudents(hogwarts);

/*let gryffindorStudents = getGryffindorStudents(hogwarts);
console.log(gryffindorStudents);
*/
console.log ("------------------------");

function getTeachersWithPets(hogwarts) {
  for (let person of hogwarts) {
    let { firstName, lastName, pet, occupation } = person;

    if (occupation === "Teacher" && pet) {
      console.log(`${firstName} ${lastName}`);
    }
  }
}
console.log ("Teachers with pets:");
getTeachersWithPets(hogwarts);
