import React from 'react';
// import { RegisterUser } from './apis/authentication';
import { Form } from 'antd';
import '../../../Styles/Login.css';

const SignUp = ({ setLogin }) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    // const handleSubmit = async (values) => {
    // try {
    //     const response = await RegisterUser(values);
    //     if (response.success) {
    //         message.success(response.message);
    //     } else {
    //         message.error(response.message);
    //     }
    // } catch (error) {
    //     message.error(error.message);
    // }
    // };

    return (
        <div className='login-box'>
            <div className='login-title-area'>
                <h1 className='login-title'>Join Handi ATX!</h1>
                <h2 className='login-subtitle'>
                    And start rating Austin's best party bathrooms today!
                </h2>
                <hr className='login-divider' />
                <Form layout='vertical' onFinish={onFinish}>
                    <h2 className='login-command'>Create your new account:</h2>
                    <Form.Item name='username' label='Username'>
                        <input type='text' />
                    </Form.Item>
                    <Form.Item name='email' label='Email'>
                        <input type='text' />
                    </Form.Item>
                    <Form.Item name='password' label='Password'>
                        <input type='password' />
                    </Form.Item>
                    <button className='register'>Register</button>
                </Form>
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
