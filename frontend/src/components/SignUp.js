import React,{useState} from 'react';

const SignUp = ()=>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const getData=()=>{
        console.warn(name,email,password);
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
