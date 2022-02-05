import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar=() => {
    const auth = localStorage.getItem('usrdata');
    const navigate = useNavigate();
    const signout=()=>{
        localStorage.clear();
        navigate('/signup');
    }

    return(
        <div className='navbar-ul'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/addproduct">Add Product</Link></li>
                <li><Link to="/updateproduct">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                {
                    auth ? <li><Link to="/signup" onClick={signout}>SignOut</Link></li>:
                    <>
                        <li><Link to="/signin">SignIn</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                    </>
                }
            </ul>
        </div>
    )
}

export default Navbar