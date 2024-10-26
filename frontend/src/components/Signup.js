import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result=> {
            console.log(result)
            navigate('/signin');
        })
        .catch(err=> console.log(err))
    }
  return (
    <div className='signup_container'>
        <form className='signup_form' onSubmit={handleSubmit}>
            <div className='form_title'>Signup</div>
            <div className='intbox_container'>
                <input className='signup_inputbox' placeholder='Name' onChange={(e)=>setName(e.target.value)}></input>
                <input className='signup_inputbox' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
                <input className='signup_inputbox' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}></input>
                <button className='signup_btn'>Signup</button>
            </div>
            <div>Already have an account ? <Link to="/signin">Login</Link></div>
            <div>or</div>
            <hr></hr>
            <button className='signup_btn'>Login with Facebook</button>
            <button className='signup_btn'>Login with Google</button>
        </form>
    </div>
  )
}

export default Signup