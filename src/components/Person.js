import React from "react";

function Person({ person }) {
  // receive the prop as person from the Namelist component
  return (
    <div>
      <h2>
        My name is {person.name} and i am {person.age} years old. I love{" "}
        {person.skill}
      </h2>
    </div>
  );
}

export default Person;
