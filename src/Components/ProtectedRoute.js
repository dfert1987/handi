import React from 'react';

const protectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return children;
    } else {
        window.location.href = '/login';
    }
    return <React.Fragment />;
};

export default protectedRoute;
