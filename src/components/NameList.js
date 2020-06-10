import React from "react";
import Person from './Person';

function NameList() {
  //const names = ["Rajesh", "Sriram", "Suresh", "Archana", "Nataraj", "Ranjani"];
  //const namesList = names.map((name) => <h2> {name} </h2>); // map funtion is as array.map(x,f(x)); here name = x
  const persons = [
      {
          id : 1,
          name : 'Rajesh',
          age  : 50,
          skill : 'Accounting'
      },
      {
          id : 2,
          name : 'Sriram',
          age : 90,
          skill : 'Computers'
      },
      {
          id : 3,
          name : 'Suresh',
          age : 103,
          skill : 'Management'
      }
  ]

  const personList = persons.map(person => <Person person = {person} />) 
  // very important syntax. you are passing the person object as a prop to the <Person> component via a map function. 
  return <div>{personList}</div>;
  // remember the reason why you have a return tag here and also within Person component - because you are moving the map function outside 
  // the return statement and just rendering the array as a whole. this is for cleaner programming.
}

export default NameList;
