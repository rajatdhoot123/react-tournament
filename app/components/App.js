import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Tournament from './Tournament.js';
import Login from './Login.js';
import Home from './Home.js';
import Signup from './Signup.js';
import Tournament_Details from './TournamentDetails.js'
import store from '../store/store.js';
import { Provider } from 'react-redux';

require('../css/index.css');

class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={Home} />
                        <Route path='/tournament' component={Tournament} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/tournament_details/:tour_id/:user_id' component={Tournament_Details} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default App;
