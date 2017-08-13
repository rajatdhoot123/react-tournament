import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
        <h1 className='header'>Welcome to Swiss Tournament</h1>
        <Link to='/signup'>SignUp</Link>
        <Link to='/login'>Login</Link>
        <Link to='/tournament'>Tournament</Link>
        </div>
    );
}
export default Home;
