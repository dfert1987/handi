import React from 'react';
import '../../../Styles/Profile.css';

const Overview = ({ user }) => {
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
                        <p className='no-activities'>Do you even party?</p>
                    </div>
                </div>
            </div>
            <div className='right-overview'>
                
            </div>
        </>
    );
};

export default Overview;
