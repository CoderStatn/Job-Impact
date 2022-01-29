import React from 'react';
import { useLocation, Navigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return <div className="spinner-grow text-center" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    if (user.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;