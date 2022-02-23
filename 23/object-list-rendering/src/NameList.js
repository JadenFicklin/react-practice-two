import React from "react";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "bruce",
      age: 30,
      skill: "a money guru bro",
    },
    {
      id: 2,
      name: "clark",
      age: 25,
      skill: "freakin immortal bro",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "freakin immortal bro",
    },
    {
      id: 4,
      name: "Jaden",
      age: 22,
      skill: "a money guru bro",
    },
  ];

  const personList = persons.map((person) => (
    <h2>
      my name is {person.name} and I am {person.skill}... my id is {person.id}
    </h2>
  ));
  return <div>{personList}</div>;
}

export default NameList;
