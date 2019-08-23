import React, { Component } from 'react';

class Score extends Component{
    render(){
        return (
            <div>
                <h2>Toss count: {this.props.tossCount} Heads: {this.props.headCount} Tails: {this.props.tailCount} </h2>
            </div>
        )
    }
}

export default Score;