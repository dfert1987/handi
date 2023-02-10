import React from 'react';
import Overview from './Overview';
import FriendsView from './FriendsView';
import ComplimentsView from './ComplimentsView';
import SchneefedView from './SchneefedView';
import ReviewsView from './ReviewsView';
import '../../../Styles/Profile.css';

const MainProfile = ({ user, mainView }) => {
    const showView = () => {
        if (mainView === 'overview') {
            return <Overview user={user} />;
        }
        if (mainView === 'friends') {
            return <FriendsView user={user} />;
        }
        if (mainView === 'compliments') {
            return <ComplimentsView user={user} />;
        }
        if (mainView === 'schneef') {
            return <SchneefedView user={user} />;
        }
        if (mainView === 'reviews') {
            return <ReviewsView user={user} />;
        }
    };

    return <div className='main-view-container'>{showView()}</div>;
};

export default MainProfile;
