import React from "react";
import { Navigate } from "react-router-dom";

const RoleBasedRoute = ({ children, allowedRoles }) => {
    const token =  localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (!token) return <Navigate to="/login" />;
    if (!allowedRoles.includes(userRole)) return <Navigate to="/unauthorized" />;

    return children;
};

export default RoleBasedRoute;
