import React from 'react';
import Logo from '../Assets/Images/logogator.png';
import '../Styles/layout.css';

const DefaultLayout = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className='layout'>
            <div className='sidebar justify-content-between'>
                <span>GR</span>
            </div>
            <div className='content'>
                <div className='header'>
                    <span className='top-bar-title'>
                        <img className='top-logo' src={Logo} alt='Gator Rater Logo' />
                        <h5 className='top-logo-text'>GatorRater</h5>
                    </span>
                    <span>
                        <div className='logo-name'>
                            <i class='ri-shield-user-line ri-2x '></i>
                            <span className='username'>{user?.username}</span>
                        </div>
                    </span>
                </div>
                <div className='body'>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
