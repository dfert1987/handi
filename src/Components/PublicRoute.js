import React from 'react';

const publicRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        window.location.href = '/';
    } else {
        return children;
    }
    return <React.Fragment />;
};

export default publicRoute;
