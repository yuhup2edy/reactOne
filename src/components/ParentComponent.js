import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent'
        }

        this.greetParent =  this.greetParent.bind(this);
        //since you are using this keyword in the function, it must be bound
    }
    
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`);
        
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/> {/*pass the greetHandler function as a prop to the child*/}

            </div>
        )
    }
}

export default ParentComponent
