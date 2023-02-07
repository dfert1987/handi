import React from 'react';
import { Form, message } from 'antd';
import { LoginUser } from '../../../Apis/authentication';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../../Redux/alertSlice';
import '../../../Styles/Login.css';

const Login = ({ setLogin }) => {
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            const response = await LoginUser(values);
            dispatch(HideLoading());
            if (response.success) {
                message.success(response.message);
                localStorage.setItem('user', JSON.stringify(response.data));
                window.location.href = '/';
            } else {
                message.error(response.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    return (
        <div className='login-box'>
            <div className='login-title-area'>
                <h1 className='login-title'>Welcome to GatorRater ATX!</h1>
                <h2 className='login-subtitle'>
                    Rating Austin's Best Party Bathrooms
                </h2>
                <hr className='login-divider' />
            </div>
            <Form layout='vertical' onFinish={onFinish}>
                <h2 className='login-command'>Login to your account:</h2>
                <Form.Item
                    name='email'
                    label='Email'
                    placeholder='email@gmail.com'
                    rules={[
                        {
                            required: true,
                            message: 'Email is a required field.',
                        },
                        {
                            type: 'email',
                            message: 'Please enter a valid email.',
                        },
                    ]}>
                    <input type='text' />
                </Form.Item>
                <Form.Item
                    name='password'
                    label='Password'
                    placeholder='password'
                    rules={[
                        {
                            required: true,
                            message: 'Password is a required field.',
                        },
                    ]}>
                    <input type='password' />
                </Form.Item>
                <button className='register' type='submit'>
                    Login
                </button>
            </Form>
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
