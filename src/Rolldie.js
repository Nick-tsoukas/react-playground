import React, { Component } from 'react';
import Die from './Die';

import './rolldie.css';
// helpers 
import dice from './dice';

class Rolldie extends Component {
    constructor(props){
        super(props);
        this.state = { dieOne: 1, dieTwo: 1, rolling: false};
        this.roll = this.roll.bind(this);
    }
    roll(){
       let  rollOne = dice[Math.floor(Math.random() * 6) ];
       let  rollTwo = dice[Math.floor(Math.random() * 6) ];
       this.setState({rolling: true});
       setTimeout(() => {
        this.setState({dieOne: rollOne, dieTwo: rollTwo, rolling: false});
       },1000)
    }

    render(){
        return (
            <div className="Rolldie-container">
                <div>
                    <Die rolling={this.state.rolling} roll={this.state.dieOne} />
                    <Die rolling={this.state.rolling} roll={this.state.dieTwo} />
                </div>
                <div>
                    <button onClick={this.roll} className="Rolldie-button">
                       {this.state.rolling? "Rolling" : "Roll dice"}
                    </button>
                </div> 
            </div>
        )
    }
}

export default Rolldie;