import React, { Component } from 'react';
import './pick.css'

class Pick extends Component {
    render(){
        return (

                <h1 className="Pick-number"> { this.props.number }</h1>

        )
    }
}

export default Pick