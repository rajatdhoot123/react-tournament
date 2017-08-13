import React, { Component } from 'react';

require('../css/index.css');

class InputBox extends Component {
    constructor(props){
        super(props);
        this.change=this.change.bind(this);
    }
    change(event){
        let value=event.target.value;
        this.props.upState(value)
    }
    render() {
        return (
        <input type = 'text' name={this.props.name} onChange={this.change} value={this.props.value} className = 'form-control inputbox' />
    );
    }

}
export default InputBox;
