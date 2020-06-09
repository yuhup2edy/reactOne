import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}> Greet Parent !</button> 
                simple syntax to receive the prop as a function from parent */}
            <button onClick={()=> props.greetHandler('Child')}> Greet Parent </button>
            {/* use above syntax to pass any number of args back to parent via the called function on the prop*/}
        </div>
    )
}

export default ChildComponent
