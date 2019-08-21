import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props);
        this.state = { clicked: false };
        this.click = this.click.bind(this);
        this.unClick = this.unClick.bind(this);
    }
    click(e){
        this.setState({clicked: true});
    }
    unClick(e){
        this.setState({clicked: false });
    }
    render(){
        return (
            <div>
                <h1>{this.state.clicked? 'Clicked' : 'Not Clicked'}</h1>
                <button onClick={this.state.clicked? this.unClick : this.click}>Click Me!</button>
            </div>
        )
    }
}

export default Button;