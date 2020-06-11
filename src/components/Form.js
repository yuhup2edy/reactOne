import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments : ''
        }
    }
    handleUsernameChange = (event) =>{ //by default, the event is available as an argument to the onChange function
        this.setState({
            username : event.target.value
        });
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments : event.target.value
        });
    }
    render() {
        return (<form>
            <div>
                <label> Username</label>
                <input type = 'text' value = {this.state.username} onChange={this.handleUsernameChange}></input>
                {/* controlled component where react controls everything and when setState happens, the render method is called again
                    thereby setting the value as the current state */}
            </div> 
            <div>
                <label> comments </label>
                <textarea value = {this.state.comments} onChange={this.handleCommentsChange}> </textarea>
            </div> 
            </form>

        )
    }
}

export default Form
