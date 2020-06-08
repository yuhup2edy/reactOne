import React, { Component } from 'react';

class Message extends Component{

    //in order to use state, must code within the constructor
    //since we are inheriting base class, we must call the base class constructor using the super() always

    constructor(){
        super();
        this.state = {
            message : 'Hi Visitor'
        }
    }

    changeMessage()
    {
        this.setState({
            message : 'Thanks for subscribing'
        });
    }

    render(){
        return (
        <div> 
        <h1>  {this.state.message} </h1>
        <button onClick={()=>this.changeMessage()}> Subscribe </button>
        {/* onClick is camelCase, must have enclosing handler in {} and follow far arrow with this.functionName */}
        </div>
        );
    }
}

export default Message;
