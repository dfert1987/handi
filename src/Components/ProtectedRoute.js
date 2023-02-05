import React from 'react';

const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    console.log(children);
    if (user) {
        return children;
    } else {
        window.location.href = '/login';
    }
    return <React.Fragment />;
};

export default ProtectedRoute;
