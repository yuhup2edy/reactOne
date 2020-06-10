import React from 'react'
import './myStyles.css'

function Stylesheets(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className = {`${className} font-xl font-face`} > Stylesheets</h1> {/* remember in react class should be className */}
        </div>
    )
}

export default Stylesheets
