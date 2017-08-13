import React, { Component } from "react";
import InputBox from "./InputBox.js";

class Tournament_Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.updatePlayerName=this.updatePlayerName.bind(this);
        this.submit=this.submit.bind(this);
    }
    submit() {
        let self=this;
        axios.post('http://192.175.7.1:5000/player',this.state)
            .then(response => {
                if(response.status==200) {
                    self.props.dispatch()
                }
            })
        alert(this.state.value)
    }
    updatePlayerName(value) {
        this.setState({
            name: value
        })
    }
    render() {
        console.log(this.props.match.params,"-------------------------------------------------------")
        return (
            <div>
                <div className='row'>
                    <div className="jumbotron text-center">
                        <h1 className="header">Welcome to Swiss Tournament</h1>
                    </div>
                </div>
                <div className='row'>
                  <div className='col-md-4'>
                  <div className='col-md-6'>
                    <InputBox name='enter_player' value={this.state.name} upState={this.updatePlayerName} />
                  </div>
                  <div className='col-md-6'>
                    <button onClick={this.submit}>Add Player</button>
                  </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Tournament_Details;
