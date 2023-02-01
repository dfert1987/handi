import React from 'react';
import '../../../Styles/Login.css';

const Login = ({ setLogin }) => {
    return (
        <div className='login-box'>
            <div className='login-title-area'>
                <h1 className='login-title'>Welcome to Handi ATX!</h1>
                <h2 className='login-subtitle'>
                    Rating Austin's Best Party Bathrooms
                </h2>
                <hr className='login-divider' />
            </div>
            <form action='#!' id='main'>
                <h2 className='login-command'>Login to your account</h2>
                <div class='input-parent'>
                    <label for='username'>Email</label>
                    <input type='text' id='email' />
                </div>

                <div class='input-parent'>
                    <label for='password'>Password</label>
                    <input type='password' id='password' />
                </div>

                <button type='submit'>Login</button>
            </form>
            <hr className='login-divider under' />
            <div className='not-member-container'>
                <p className='not-member'>Not a member?</p>
                <button className='sign-up' onClick={() => setLogin(false)}>
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Login;
