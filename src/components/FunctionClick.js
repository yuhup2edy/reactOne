import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log("Button Clicked");
    }

    return (
        <div>
            <button onClick={clickHandler}> Click </button> {/* remember event handler is a function and not a function call */}
            {/* <button onClick={clickHandler()}> Click </button>  dont do this () because it becomes a function and will log to console when loading. */}

        </div>
    )
}

export default FunctionClick
