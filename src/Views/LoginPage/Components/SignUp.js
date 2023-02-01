import React from 'react';
import '../../../Styles/Login.css';

const SignUp = ({ setLogin }) => {
    return (
        <div className='login-box'>
            <div className='login-title-area'>
                <h1 className='login-title'>Join Handi ATX!</h1>
                <h2 className='login-subtitle'>
                    And start rating Austin's best party bathrooms today!
                </h2>
                <hr className='login-divider' />
                <form action='#!' id='main'>
                    <h2 className='login-command'>Create your new account:</h2>
                    <div class='input-parent'>
                        <label for='username'>Username</label>
                        <input type='text' id='username' />
                    </div>
                    <div class='input-parent'>
                        <label for='email'>Email</label>
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
                    <p className='not-member'>Already a member?</p>
                    <button className='sign-up' onClick={() => setLogin(true)}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
