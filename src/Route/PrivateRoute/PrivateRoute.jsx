import React, { useContext, useState } from 'react';
import { AuthContex } from '../../Provider/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContex);
    if(loading)
    {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user)
    {
        return children;
    }


    return (
       <Navigate to='/login' ></Navigate>
    );
};

export default PrivateRoute;