import React from "react";
import Person from './Person';

function NameList() {
  const names = ["Rajesh", "Sriram", "Suresh", "Archana", "Nataraj", "Ranjani"];
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

  //const personList = persons.map(person => <Person key = {person.id} person = {person} />) 
  // very important syntax. you are passing the person object as a prop to the <Person> component via a map function. 
  // key prop should be unique for each element in the array. not including it will throw a warning in the browser console
  
  // ** explaining index, map function takes index as second ard which we can pass as key ** /
  const namesList = names.map((name,index) => <h2 key={index}> {index} {name} </h2>)
  
  //return <div>{personList}</div>;
  return <div>{namesList}</div>;
  // remember the reason why you have a return tag here and also within Person component - because you are moving the map function outside 
  // the return statement and just rendering the array as a whole. this is for cleaner programming.
}

export default NameList;
