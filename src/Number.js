import React, { Component } from 'react';

import './Number.css'

class Number extends Component {
    constructor(props){
        super(props);
        this.state = {number: 1, isWinner: false };
        this.genNumber = this.genNumber.bind(this);
        this.reset = this.reset.bind(this);
    }
    genNumber(){
        let random = Math.floor(Math.random() * 10) + 1;
        if(random === 7) {
            this.setState({number: random, isWinner: true });
        } else {
            this.setState({number: random});
        }
    }
    reset(){
        this.setState({number: 1, isWinner: false});
    }
    render(){
        return (

            <div>
                <h1>Number is : {this.state.number }</h1>
                {this.state.isWinner
                ? <div>
                    <h2>You Won!</h2>
                    <button onClick={this.reset} className="Number-button">Play Again</button>
                </div>
                : <button className="Number-button" onClick={this.genNumber}>Generate Number</button>
                }
            </div>
        )
    }
}

export default Number ;