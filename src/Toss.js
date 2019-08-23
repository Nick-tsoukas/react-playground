import React, { Component } from 'react';
import Coin from './Coin';
import Score from './Score';

// images 
import headsImage from './images/heads.png';
import tailsImage from './images/tails.png';

// css
import './toss.css';

class Toss extends Component {
    constructor(props){
        super(props);
        this.state = { tossCount: 0, headCount: 0, tailCount: 0, coinFace: null };
        this.tossCoin = this.tossCoin.bind(this);
    }
    tossCoin(){
        const coins = [headsImage, tailsImage];
        const coin =  coins[Math.floor(Math.random() * 2)];
        if(coin === headsImage) {
            this.setState(curState => {
                return {coinFace: coin, tossCount: curState.tossCount + 1, headCount: curState.headCount + 1};
            })
        } else {
            this.setState(curState => {
                return {coinFace: coin, tossCount: curState.tossCount + 1, tailCount: curState.tailCount + 1};
            })
        }
       
    }
   
    render(){
        return(
            <div className="Toss-container">
                <h1 className="title">Toss</h1>
                <Coin coinFace={this.state.coinFace}/>
                <button onClick={this.tossCoin} className="Toss-button">Flip Coin</button>
                <Score 
                tossCount={this.state.tossCount} 
                headCount={this.state.headCount}
                tailCount={this.state.tailCount}
                 />
            </div>
        )
    }
}

export default Toss;