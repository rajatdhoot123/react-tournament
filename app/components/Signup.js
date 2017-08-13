import React, { Component } from 'react';
import InputBox from './InputBox.js';
import axios from 'axios';
import { userSignup } from '../action.js';
import { connect } from "react-redux";
import store from "../store/store.js";


require('../css/index.css');

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.submit=this.submit.bind(this);
        this.updateEmail=this.updateEmail.bind(this);
        this.updatePassword=this.updatePassword.bind(this);
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
    submit(event) {
        event.preventDefault();
        let self = this;
        axios.post('http://localhost:5000/signup',this.state)
        .then((response)=>{
            if(response.status==200){
                self.props.dispatch(userSignup(true))
                self.props.history.push('/login')
            }
        })
    }
    render () {
        let email=this.state.email;
        let password=this.state.password;
        return (
            <form onSubmit={this.submit}>
                <div className='container'>
                <h1>SignUp</h1>
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
                        >SignUp
                </button>
                </div>
            </form>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        auth: state.user_signup.auth
    }
}
export default connect(mapStateToProps)(Signup);
