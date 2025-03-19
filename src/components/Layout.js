import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/post">Create Post</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;