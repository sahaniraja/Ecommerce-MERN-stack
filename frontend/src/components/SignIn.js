import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn =()=>{

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('usrdata');
        if(auth)
        {
            navigate('/')
        }
    },[])

    const logData = async()=>{
        console.warn(email,password);
        let result = await fetch('http://127.0.0.1:5000/signin',{
            method : 'post',
            body : JSON.stringify({email,password}),
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.name)
        {
            localStorage.setItem("usrdata",JSON.stringify(result));
            navigate('/');
        }
        else
        {
            alert('Please enter a valid username or password')
        }
    }

    return(
        <div className="signinform">
            <h2>Welcome to SignIn</h2>
            <input className="inputBox" type='email' placeholder='Username' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input className="inputBox" type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button className="signinbtn" onClick={logData} >Sign In</button>
        </div>
    )
}

export default SignIn;