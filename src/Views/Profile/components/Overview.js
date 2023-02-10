import React from 'react';
import '../../../Styles/Profile.css';

const Overview = ({ user }) => {
    const getInfo = (infoType) => {
        if (infoType === 'location') {
            if (user.city && user.state) {
                return user.city + ',' + user.state;
            } else if (user.city && !user.state) {
                return user.city;
            } else if (!user.city && user.state) {
                return user.state;
            } else return 'unknown';
        } else if (infoType === 'schneef') {
            if (user.dateAdded) {
                return user.dateAdded;
            }
            return 'unknown';
        } else if (infoType === 'bio') {
            if (user.bio) {
                return user.bio;
            }
            return 'unknown';
        }
    };

    return (
        <>
            <div className='left-overview'>
                <div className='friends-compliments-container'>
                    <h3 className='main-title friends-compliments'>
                        Friend Requests and Compliments
                    </h3>
                    <p className='no-requests'>
                        No new friend requests or compliments at this time.
                    </p>
                </div>
                <div className='activity-container'>
                    <h3 className='recent-title'>Recent Activity</h3>
                    <hr className='activity-divider' />
                    <div className='activities'>
                        <p className='no-activities'>
                            No recent activity. Do you even party?
                        </p>
                    </div>
                </div>
            </div>
            <div className='right-overview'>
                <h4 className='about-title'>About {user.username}</h4>
                <div className='overview-sub'>
                    <h5 className='about-subtitle'>From:</h5>
                    <p className='info'>{getInfo('location')}</p>
                </div>
                <div className='overview-sub'>
                    <h5 className='about-subtitle'>Schneefing Since:</h5>
                    <p className='info'>{getInfo('schneef')}</p>
                </div>
                <div className='overview-sub'>
                    <h5 className='about-subtitle'>Bio:</h5>
                    <p className='info'>{getInfo('bio')}</p>
                </div>
            </div>
        </>
    );
};

export default Overview;
