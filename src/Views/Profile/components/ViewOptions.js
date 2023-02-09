import React from 'react';
import schneef from '../../../Assets/Images/schneef.png';
import '../../../Styles/Profile.css';
export const ViewOptions = ({ user, mainView, setMainView }) => {
    const selectedView = (option) => {
        if (option === mainView) {
            return 'viewOption selectedView';
        }
        return 'viewOption';
    };

    return (
        <div className='view-options-container'>
            <h4 className='viewOptions-header'>{user.username}'s Profile</h4>
            <div className='view-options'>
                <div className='option-divider'>
                    <div
                        className={selectedView('overview')}
                        onClick={() => setMainView('overview')}>
                        <i className='ri-profile-line optionIcon'></i>
                        <p className='optionText'>Profile Overview</p>
                    </div>
                    <hr />
                </div>
                <div className='option-divider'>
                    <div
                        className={selectedView('friends')}
                        onClick={() => setMainView('friends')}>
                        <i className='ri-user-heart-line optionIcon'></i>
                        <p className='optionText'>Friends</p>
                    </div>
                    <hr />
                </div>
                <div className='option-divider'>
                    <div
                        className={selectedView('reviews')}
                        onClick={() => setMainView('reviews')}>
                        <i className='ri-star-line optionIcon'></i>
                        <p className='optionText'>Reviews</p>
                    </div>
                    <hr />
                </div>
                <div className='option-divider'>
                    <div
                        className={selectedView('compliments')}
                        onClick={() => setMainView('compliments')}>
                        <i className='ri-award-line optionIcon'></i>
                        <p className='optionText'>Compliments</p>
                    </div>
                    <hr />
                </div>
                <div className='option-divider'>
                    <div
                        className={selectedView('schneef')}
                        onClick={() => setMainView('schneef')}>
                        <img
                            className='schneef option'
                            alt='schneef nose'
                            src={schneef}
                        />
                        <p className='optionText'>Schneefed In</p>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default ViewOptions;
