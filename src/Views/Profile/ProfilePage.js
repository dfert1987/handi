// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ViewOptions from './components/ViewOptions';
import MainProfile from './components/MainProfile';
import ImageModal from '../../Components/AddPhoto';
import nopic from '../../Assets/Images/nopic.png';
import schneef from '../../Assets/Images/schneef.png';
import '../../Styles/Profile.css';

export const ProfilePage = ({ children }) => {
    const [avatar, setAvatar] = useState(nopic);
    const [mainView, setMainView] = useState('overview');
    const [viewImageUpload, setViewImageUpload] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user.avatar) {
            setAvatar(user.avatar);
        } else setAvatar(nopic);
    }, [user]);

    const getUserLocation = () => {
        if (user.city && user.state) {
            return user.city + user.state;
        }
        if (user.city && !user.state) {
            return user.city;
        }
        if (!user.city && user.state) {
            return user.state;
        } else return 'unkown';
    };

    return (
        <div className='profile-container'>
            <div className='top-band'>
                <div className='banner-content'>
                    <div className='avatar-container'>
                        <img
                            className='avatar-image'
                            alt='avatar'
                            src={avatar}
                        />
                        <button
                            className='register addPhoto'
                            onClick={() => setViewImageUpload(true)}>
                            <i className='ri-camera-3-line camera'></i>
                            <p className='photoText'>+Add Photo</p>
                        </button>
                    </div>
                    <div className='name-section'>
                        <h3 className='profile-name'>{user?.username}</h3>
                        <h5 className='location'>From {getUserLocation()}</h5>
                        <div className='stats-section'>
                            <div className='stat-container'>
                                <i className='ri-user-heart-line statIcon'></i>
                                <p className='stat'>0 Friends</p>
                            </div>
                            <div className='stat-container'>
                                <i className='ri-star-line statIcon'></i>
                                <p className='stat'>0 Reviews</p>
                            </div>
                            <div className='stat-container last-stat'>
                                <img
                                    className='statIcon schneef'
                                    alt='schneef nose'
                                    src={schneef}
                                />
                                <p className='stat'>0 Stalls Schneefed In</p>
                            </div>
                        </div>
                    </div>
                    <div className='vl'></div>
                    <div className='add-section'>
                        <div className='add-item'>
                            <i className='ri-camera-3-line side'></i>
                            <button className='sign-up sideIcon'>
                                Add Profile Photo
                            </button>
                        </div>
                        <div className='add-item'>
                            <i className='ri-user-add-line side'></i>
                            <button className='sign-up sideIcon'>
                                Find Friends
                            </button>
                        </div>
                        <div className='add-item'>
                            <i className='ri-profile-line side'></i>
                            <button className='sign-up sideIcon'>
                                Update Profile
                            </button>
                        </div>
                        <div className='add-item'>
                            <i className='ri-key-line side'></i>
                            <button className='sign-up sideIcon'>
                                Login Credentials
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='under-band'>
                <ViewOptions
                    user={user}
                    mainView={mainView}
                    setMainView={setMainView}
                />
                <MainProfile user={user} mainView={mainView} />
            </div>
            {viewImageUpload ? <ImageModal user={user} /> : null}
        </div>
    );
};

export default ProfilePage;
