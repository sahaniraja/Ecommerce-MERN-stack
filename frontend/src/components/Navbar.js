import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=() => {
    return(
        <div className='navbar-ul'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/addproduct">Add Product</Link></li>
                <li><Link to="/updateproduct">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signout">SignOut</Link></li>
            </ul>
        </div>
    )
}

export default Navbar