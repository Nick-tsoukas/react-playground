import React, { Component } from 'react';
import Countbox from './Countbox';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {count: 5 };
    }
    render(){
        return (
            <div>
                <h1>This is the parent</h1>
                <Countbox count={this.state.count} />
            </div>
        )
    }
}

export default Counter;