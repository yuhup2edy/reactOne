import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; // use this if you are exporting default Greet 
// import { Greet } from './components/Greet' use this if you are exporting as export const Greet =  
//import MyFunction from './components/Greet'; can export any name and use it as function 
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
    <EventBind />
    {/* <FunctionClick />
    <ClassClick />
    <Counter />
    <Greet name ="Indiana" locale = "Sallie Mae"> Thanks for being a loyal customer</Greet>
    <Welcome name = "Mindtree" location = "Warren"> Your visit to location was loyal</Welcome> 
    {/*<Welcome name = "Realogy" location = "Mt. Laurel"> <p> Transition Manager </p></Welcome> */}
    {/* <Greet name = "Virginia" locale = "Fannie Mae" /> */}
    {/* <Message></Message> */}
    </div> 
  );
}

export default App;

// i can import the function component with any name. in this case i am using MyFunction instead of Greet. While expoorting, 
// remember to export as default. Other syntax is export const Greet = () => return <h1> Sriram </h1> and in this case, we need to import 
// the function component as Greet only 

// install ES7 react redux js snippets extension in VS code