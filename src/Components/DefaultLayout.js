import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Assets/Images/whitegator.png';
import '../Styles/Layout.css';

const DefaultLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(true);

    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const userMenu = [
        {
            title: 'Home',
            onClick: () => navigate('/'),
            icon: <i className='ri-home-3-line'></i>,
            path: '/',
        },
        {
            title: 'Discover',
            onClick: () => navigate('/find'),
            icon: <i className='ri-map-2-line'></i>,
            path: '/find',
        },
        {
            title: 'Add Review',
            onClick: () => navigate('/review'),
            icon: <i className='ri-edit-box-line'></i>,
            path: '/review',
        },
        {
            title: 'Add Location',
            onClick: () => navigate('/location'),
            icon: <i className='ri-map-pin-add-line'></i>,
            path: '/location',
        },
        {
            title: 'Profile',
            onClick: () => navigate('/profile'),
            icon: <i className='ri-profile-line'></i>,
            path: '/profile',
        },
        {
            title: 'Logout',
            onClick: () => {
                localStorage.removeItem('user');
                navigate('/login');
            },
            icon: <i className='ri-logout-box-r-line'></i>,
            path: '/login',
        },
    ];

    console.log(collapsed);

    return (
        <div className='layout'>
            <div className='sidebar justify-content-between'>
            
                <div
                    className='menu'
                    style={{
                        width: collapsed ? '0' : '300px',
                        padding: collapsed ? '0' : '15px',
                    }}>
                    {!collapsed ? (
                        <div className='menu-logo'>
                            <i
                                className='ri-close-line'
                                onClick={() => setCollapsed(true)}></i>
                            <img
                                className='top-logo'
                                src={Logo}
                                alt='Gator Rater Logo'
                            />
                            <h5 className='top-logo-text'>GatorRater</h5>
                        </div>
                    ) : null}
                    {userMenu.map((item, index) => {
                        const isActive = window.location.pathname === item.path;
                        if (!collapsed) {
                            return (
                                <div
                                    className={`menu-item ${
                                        isActive && 'active-menu-item'
                                    }`}
                                    key={index}
                                    onClick={item.onClick}>
                                    {item.icon}

                                    <span>{item.title}</span>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className='content'>
                <div className='header'>
                    <div className='d-flex items-center gap-2 top-bar-title'>
                        {collapsed && (
                            <i
                                className='ri-menu-2-fill open'
                                onClick={() => setCollapsed(false)}></i>
                        )}
                        {!collapsed && (
                            <i
                                className='ri-close-line'
                                onClick={() => setCollapsed(true)}></i>
                        )}
                        <img
                            className='top-logo'
                            src={Logo}
                            alt='Gator Rater Logo'
                        />
                        <h5 className='top-logo-text'>GatorRater</h5>
                    </div>
                    <span>
                        <div className='logo-name'>
                            <i
                                className='ri-shield-user-line'
                                onClick={() => navigate('/profile')}></i>
                            <span
                                className='username'
                                onClick={() => navigate('/profile')}>
                                {user?.username}
                            </span>
                        </div>
                    </span>
                </div>
                <div className='body'>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
