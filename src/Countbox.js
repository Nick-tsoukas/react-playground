import React, { Component } from 'react';


class Countbox extends Component {
   
    render(){
        return (
            <div>
                <h2> {this.props.count} </h2>
            </div>
        )
    }
}

export default Countbox;