import React from 'react';
import { RegisterUser } from '../../../Apis/authentication';
import { Form, message } from 'antd';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../../Redux/alertSlice';
import '../../../Styles/Login.css';

const Register = ({ setLogin }) => {
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedDate = mm + '/' + dd + '/' + yyyy;

        values.dateAdded = formattedDate;
        try {
            dispatch(ShowLoading());
            const response = await RegisterUser(values);
            dispatch(HideLoading());
            if (response.success) {
                message.success(response.message);
                setLogin(true);
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
                <h1 className='login-title'>Join GatorRater ATX!</h1>
                <h2 className='login-subtitle'>
                    And start rating Austin's best party bathrooms today!
                </h2>
                <hr className='login-divider' />
                <Form layout='vertical' onFinish={onFinish}>
                    <h2 className='login-command'>Create your new account:</h2>
                    <Form.Item
                        name='username'
                        label='Username'
                        placeholder='Username'
                        rules={[
                            {
                                required: true,
                                message: 'Username is a required field.',
                            },
                            {
                                min: 6,
                                message:
                                    'Username must be at least 6 characters long.',
                            },
                        ]}>
                        <input type='text' defaultValue='' />
                    </Form.Item>
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
                        <input type='text' defaultValue='' />
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
                            {
                                min: 8,
                                message:
                                    'Password must be atleast 8 characters.',
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
