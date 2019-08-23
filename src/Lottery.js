import React, { Component } from 'react';
import Pick from './Pick';
import './lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        maxPicks: 6,
        range: 40
    }
    constructor(props){
        super(props);
        this.state = { nums: Array.from({length: this.props.maxPicks})};
        this.roll = this.roll.bind(this);
    }
    // Just generates a random number
    random(range){
        return Math.floor(Math.random() * range ) + 1; 
    }

    roll(){
        this.setState( (c,props) => {
            return {nums: c.nums.map((n) => {
                return this.random(this.props.range)
            })}
        })
    //   this.setState(currentState => ({
    //       nums: currentState.nums.map((n) => {
    //           return this.random(this.props.range)
    //       })
    //   }))
    }

    render(){
        return (
            <div className="Lottery-container">
                <h1> { this.props.title } </h1>
                    <div>
                        {
                            this.state.nums.map((n) => {
                                return <Pick number={n} />
                            })
                        }
                    </div>
                    <button onClick={this.roll}>Play</button>
            </div>
        )
    }
}

export default Lottery;