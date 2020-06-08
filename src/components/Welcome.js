import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        return (
        <div> 
        <h1> Welcome to Class components</h1>
        <h2> Received {this.props.name} and {this.props.location} </h2>
        {this.props.children} 
        </div>
        );
    }
}

export default Welcome;
