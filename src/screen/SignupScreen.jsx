import React, { useState } from 'react'
import toast from 'react-hot-toast'

function SignupScreen() {
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setCoonfirmPassword]=useState("")
    const formhandler=(e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            toast.error("Passwords do not match")
        }else{
            console.log(username, email, password, confirmPassword)
            toast.success("form submitted successfully")
        }
    }
  return (
    <div className='container'>
      <h1 className='text-center my-3'>Sign up</h1>
      <form className='w-25 mx-auto border p-3 rounded bg-info' onSubmit={formhandler}>
        <div className='form-group'>
            <label for="name" className='p-1'>Name</label>
            <input type="text" id="name" className='form-control' onChange={(e)=>setUsername(e.target.value)} placeholder='Enter name'/>
        </div>
        <div className='form-group'>
            <label for="email" className='p-1'>Email</label>
            <input type="email" id="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/>
        </div>
        <div className='form-group'>
            <label for="password" className='p-1'>Password</label>
            <input type="password" id="password" className='form-control' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
        </div>
        <div className='form-group'>
            <label for="confirmPassword" className='p-1'>Confirm Password</label>
            <input type="password" id="confirmPassword" className='form-control' onChange={(e)=>setCoonfirmPassword(e.target.value)} placeholder='confirmPassword'/>
        </div>
        <button type="submit" className='btn btn-primary my-2 d-block mx-auto'>Submit</button>
      </form>
    </div>
  )
}

export default SignupScreen
