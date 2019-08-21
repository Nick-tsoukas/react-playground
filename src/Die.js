import React, { Component } from 'react';
import './die.css';

class Die extends Component {

    render(){
        return (
           
            <div>
                 <i className={`${this.props.roll} ${this.props.rolling? 'Die-rolling': 'Die-notRolling'}`}></i>
            </div>
           
        )
    }
}

export default Die;