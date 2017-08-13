import React, { Component } from 'react';
import InputBox from './InputBox.js';
import { userLogin } from '../action.js';
import { connect } from 'react-redux';
import axios from 'axios';

require('../css/index.css');

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email:'',
            password:'',
        }
        this.submit=this.submit.bind(this);
        this.updateEmail=this.updateEmail.bind(this);
        this.updatePassword=this.updatePassword.bind(this);
    }

    submit(event) {
        event.preventDefault();
        let self = this;
        axios.post('http://192.175.7.1:5000/login',this.state)
        .then((response)=>{
            if(response.status==200){
                self.props.dispatch(userLogin(true,response.data.id))
                self.props.history.push('/tournament')
            }
        })
    }
    updateEmail(value) {
        this.setState({
            email:value,
        })
    }
    updatePassword(value) {
        this.setState({
            password:value,
        })
    }
    render () {
        let email=this.state.email;
        let password=this.state.password;
        return (
            <form onSubmit={this.submit}>
                <div className='container'>
                <h1>Login</h1>
                <label>
                Email:
                </label>
                <InputBox name='email' value={email} upState={this.updateEmail} />
                <label>
                Password:
                </label>
                <InputBox name='passwrd' value={password} upState={this.updatePassword} />
                <button
                    className="button"
                    type="submit"
                    value="submit"
                    disabled={!(email && password)}
                        >Submit
                </button>
                </div>
            </form>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.user.auth
    }
}
export default connect(mapStateToProps)(Login);

