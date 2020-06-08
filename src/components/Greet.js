import React from 'react';

// function Greet(){
//     return <h1> Hello From Function Component </h1>
// }

// always use ES6 syntax for functions

//const Greet = (props)=>{          // regular method to present the props
//const Greet = ({name,locale})=>{  // destructure (method 1) where you get the individual names 
const Greet = (props) => {          // destructure (method 2) where you extract object
    const {name,locale,children} = props;
 //console.log(props);
 return (
        <div> 
        {/* <h1> Halo to {props.name} from function component</h1>
        <h2> you have an awesome {props.locale} &nbsp; */}
        <h1> Halo {name}  you are from {locale} </h1>
        <h2> {children}</h2>  
        </div>
    );  // the {} is similar to interpolation and it evaluates the JSX rather than present as text
        // current limitation to return content under only 1 HTML tag. so wrap everything under a div
        // the props.children is for any content that you add between the <Greet> </Greet> tags.
        // remember that props are immutable meaning the value cannot change. for CLASS components, we use state to address this

}

//rewriting function as a non-JSX return

// const Greet = ()=>{
//     return React.createElement('div',
//     //null,
//     {id : 'one', className : 'dummyClass'},
//         React.createElement('h1',
//         null,
//         'Halo from component non JSX')
//     );
    
// }

export default Greet; // this will export the function component to be consumed by the app component

// 2 ways to reference the export and import functions. 

//createElement takes 3 parameters - tag to display, any special functions (name valud pairs) and it's children
//the React import on top is actually used to render the JSX behind the scenes. It's easy to use JSX instead of the cumbersome HTML usage
//    react calls the createElement behind the scenes
