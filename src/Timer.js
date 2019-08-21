import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {num: 0};
        this.counter();
    }
    counter(){
        setInterval(() => {
            let start = this.state.num;
            start++;
            this.setState({num:start});
        },1000)
    }
    render(){
        return(
            <div>
                <h1>{this.state.num}</h1>
            </div>
        )
    }
}

export default Timer;