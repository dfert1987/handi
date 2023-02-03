import React from 'react';
import { RegisterUser } from '../../../Apis/authentication';
import { Form, message } from 'antd';
import '../../../Styles/Login.css';

const Register = ({ setLogin }) => {
    const onFinish = async (values) => {
        console.log(values);
        try {
            const response = await RegisterUser(values);
            if (response.success) {
                message.success(response.message);
            } else {
                message.error(response.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    };

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
                    <Form.Item
                        name='username'
                        label='Username'
                        rules={[
                            {
                                required: true,
                                message: 'Username is a required field.',
                            },
                        ]}>
                        <input type='text' defaultValue='' />
                    </Form.Item>
                    <Form.Item
                        name='email'
                        label='Email'
                        rules={[
                            {
                                required: true,
                                message: 'Email is a required field.',
                            },
                        ]}>
                        <input type='text' defaultValue='' />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        label='Password'
                        rules={[
                            {
                                required: true,
                                message: 'Password is a required field.',
                            },
                        ]}>
                        <input type='password' defaultValue='' />
                    </Form.Item>
                    <button type='submit' className='register'>
                        Register
                    </button>
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

export default Register;
