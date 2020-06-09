import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message : 'Hello'
         }
         //* option 3 is best and recommended in official react documentation

        //  this.clickHandler = this.clickHandler.bind(this);
     }
    // clickHandler(){
    //     this.setState({
    //         message : 'Good Bye'
    //     })
    // } 
    
    // option 4 is rendering the whole function as a => as below
    
    clickHandler = ()=> {
        this.setState({
            message :' Good Bye'
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                
                {/* <button onClick={this.clickHandler}> Click </button> you will get error since this is undefined within scope of event handler */}
                {/* <button onClick={this.clickHandler.bind(this)}> Click </button>  option 1 is binding 
                <button onClick={()=> this.clickHandler()}> Click </button> option 2 is fat arrow call to function 
                both methods above have performance issues in large applications since the UI renders each time the function is called */}

                <button onClick={this.clickHandler}> Click </button>    {/* common for option 3 and 4 */}
            </div>
        )
    }
}

export default EventBind
