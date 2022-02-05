import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ()=>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('usrdata');
        if(auth)
        {
            navigate('/');
        }
    },[])

    const getData=async ()=>{
        console.warn(name,email,password);
        let output = await fetch("http://127.0.0.1:5000/signup",{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type': 'application/json'
            },
        });
        output = await output.json();
        console.warn(output);
        localStorage.setItem("usrdata",JSON.stringify(output));
        navigate('/');
    }

    return(
        <div className='signupform'>
            <h1>SignUp Form</h1>
            <input className='inputBox' type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
            <input className='inputBox' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' />
            <input className='inputBox' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' />
            <button className='signupbtn' type='button' onClick={getData}>Sign Up</button>
        </div>
    )
}

export default SignUp;
