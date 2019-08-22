import React, { Component } from 'react';

class Score extends Component {
    constructor(props){
        super(props);
        this.state = { score: 0};
        this.addKill = this.addKill.bind(this);

    }
   
     incrementScore(curState){
        return { score: curState.score + 3};
    }
    addKill(){
        this.setState(this.incrementScore);
    }

    render(){
        return (
            <div>
                <h1>{this.state.score}</h1>
                <button onClick={this.addKill}>Add Kill Score</button>
            </div>
        )
    }
}

export default Score;