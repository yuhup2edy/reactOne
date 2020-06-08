import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        const {name,location,children} = this.props;
        //const {state1, state2} = this.state; 
        return (
        <div> 
        <h1> Welcome to Class components</h1>
        {/* <h2> Received {this.props.name} and {this.props.location} </h2> 
        {this.props.children} */}
        {/* deconstruct within render and ability to deconstruct only what we need */}
        <h2> {name} and {location} and {children} </h2>
        </div>
        );
    }
}

export default Welcome;
