import React, { Component } from 'react';
import headsImage from './images/heads.png';
import tailsImage from './images/tails.png';
import './coin.css';

class Coin extends Component {
    render(){
        return (
            <div>
                <img src={this.props.coinFace} alt="" />
            </div>
        )
    }
}

export default Coin;