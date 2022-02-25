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
        <div>
           <img className='nav-logo' src="https://cdn.pixabay.com/photo/2020/08/05/13/11/eco-5465429_960_720.png" alt="logo" />
            {
                auth ?
                    <ul className='navbar-ul'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add-product">Add Product</Link></li>
                        <li><Link to="/updateproduct">Update Product</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/signup" onClick={signout}>SignOut({JSON.parse(auth).name})</Link></li>
                    </ul>
                :
                    <ul className='navbar-ul nav-right'>
                        <li><Link to="/signin">SignIn</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                    </ul>
            }
        </div>
    )
}

export default Navbar