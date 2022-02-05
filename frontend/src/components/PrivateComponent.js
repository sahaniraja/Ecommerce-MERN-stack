import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivComponent=()=>{
    const auth = localStorage.getItem('usrdata');
    return auth?<Outlet /> : <Navigate to="/signup" />
}

export default PrivComponent;