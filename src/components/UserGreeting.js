import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
    
    //     1st approach for conditional rendering is using if/else
    //     if (!this.state.isLoggedIn) {
    //         return (
    //             <div> Hello from Node.JS logged in</div>
    //         )
    //     }
    //     else {
    //         return (
    //             <div> Hello from Node.JS not logged in</div>
    //         )
    //     }
    // }

    //      2nd approach is to use element variables to store the JSX
    //     let message;
    //     if (this.state.isLoggedIn) {
    //         message = <div> Welcome Node JS</div>
    //     }
    //     else {
    //         message = <div> Welcome no node JS</div>
    //     }

    //     return (
    //         <div> {message} </div>
    //     )
    //     option 3 is ternary conditional operator

            //return this.state.isLoggedIn ? <div> Welcome Node JS</div> : <div> Welcome No Node JS</div>

    //      optiion 4 is short circuit operator for special all or nothing clase

            return !this.state.isLoggedIn && <div> Welcome NodeJS</div>
    }

}
export default UserGreeting
