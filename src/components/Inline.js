import React from 'react'

const heading = {
    fontSize : '72px',
    color : 'teal'
};

function Inline() {
    return (
        <div>
            <h1 style = {heading}> Inline styling</h1>          
        </div>
    )
}

export default Inline

//remember that inline styling will have an object with key = camelcased property name and value = string
