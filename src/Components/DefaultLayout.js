import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Assets/Images/logogator.png';
import '../Styles/layout.css';

const DefaultLayout = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const userMenu = [
        {
            title: 'Home',
            onClick: () => navigate('/'),
            icon: <i class='ri-home-3-line'></i>,
        },
        {
            title: 'Discover',
            onClick: () => navigate('/find'),
            icon: <i class='ri-map-2-line'></i>,
        },
        {
            title: 'Add Review',
            onClick: () => navigate('/review'),
            icon: <i class='ri-edit-box-line'></i>,
        },
        {
            title: 'Add Location',
            onClick: () => navigate('/location'),
            icon: <i class='ri-map-pin-add-line'></i>,
        },
        {
            title: 'Profile',
            onClick: () => navigate('/profile'),
            icon: <i class='ri-profile-line'></i>,
        },
        {
            title: 'Logout',
            onClick: () => localStorage.removItem('user'),
            icon: <i class='ri-logout-box-r-line'></i>,
        },
    ];
    return (
        <div className='layout'>
            <div className='sidebar justify-content-between'>
                <div className='menu'>
                    {userMenu.map((item, index) => {
                        return (
                            <div className='menu-item'>
                                {item.icon}

                                <span>{item.title}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='content'>
                <div className='header'>
                    <span className='top-bar-title'>
                        <img
                            className='top-logo'
                            src={Logo}
                            alt='Gator Rater Logo'
                        />
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
