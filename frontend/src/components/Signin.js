import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

const Signin = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/signin',{email,password})
        .then(result=> {
            console.log(result)
            if(result.data === "Success")
            {
                navigate('/');
            }
        })
        .catch(err=> console.log(err))
    }
  return (
    <div className='signin_container'>
        <form className='signin_form' onSubmit={handleSubmit}>
            <div className='form_title'>Login</div>
            <div className='intbox_container'> 
                <input className='signin_inputbox' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
                <input className='signin_inputbox' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div>Forget password</div>
            <button className='signin_btn'>Login</button>
            <div>Don't have an account ? <Link to="/signup">Signup</Link></div>
            <div>or</div>
            <hr></hr>
            <button className='signin_btn'>Login with Facebook</button>
            <button className='signin_btn'>Login with Google</button>
        </form>
    </div>
  )
}

export default Signin