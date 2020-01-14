import React, { Component } from 'react';

class Upvote extends Component {
    state = {
        count: 0
     }

     handleUpvoteClick = (e) => {
        e.preventDefault()
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
     }

    render() {
        return (
            <div>
                <button onClick={this.handleUpvoteClick}>Upvote</button>
                <p>{this.state.count}</p>
            </div>
        )
    }

}

export default Upvote;