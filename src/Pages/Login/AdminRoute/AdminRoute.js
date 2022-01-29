import React from 'react';
import { useLocation, Navigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return <div className="spinner-grow text-center" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    if (user.email && admin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />
};

export default AdminRoute;