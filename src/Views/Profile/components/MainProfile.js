import React from 'react';
import Overview from './Overview';
import '../../../Styles/Profile.css';

const MainProfile = ({ user, mainView }) => {
    const showView = () => {
        if (mainView === 'overview') {
            return <Overview user={user} />;
        }
    };

    return <div className='main-view-container'>{showView()}</div>;
};

export default MainProfile;
