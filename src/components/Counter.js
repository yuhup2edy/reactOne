import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    increment(){
        //this.state.count = this.state.count + 1; this will just update console not UI
        // this.setState(
        //     {
        //     count : this.state.count + 1
        //     },
        //     ()=>{
        //         console.log('Callback option value', this.state.count) // setstate is async, use 2nd arg accordingly for instantaneous results
        //     }
        // );
        // console.log('outside', this.state.count);
        
        // use the previous state for better handling of the code (due to using the increment)

        this.setState((prevState,props) => ({ 
        // we get access to the previous state as an arg which we will reuse and 2nd arg is props that's passed
            count : prevState.count + 1
        }));
        console.log('outside', this.state.count);
    }

    incrementFive()
    {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();

    }
    render() {
        return (<div>
                <div>count - {this.state.count} </div>
                <button onClick={()=>this.incrementFive()}> Increase Visit </button>
                </div>
        );
    }
}

export default Counter

//rce tabout for basic class component skeleton. remove export keyword prior to class
//rconst tabout for constructor syntax