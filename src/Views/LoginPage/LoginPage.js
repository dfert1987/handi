import React, { useState } from 'react';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import '../../Styles/Login.css';

const LoginPage = () => {
    const [login, setLogin] = useState(true);

    return (
        <div className='main-screen'>
            {login ? (
                <Login setLogin={setLogin} />
            ) : (
                <SignUp setLogin={setLogin} />
            )}
        </div>
    );
};

export default LoginPage;
