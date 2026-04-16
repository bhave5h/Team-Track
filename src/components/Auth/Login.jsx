import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")  
    
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center p-10'>
        <div className='border-2 border-gray-700 rounded-xl bg-[#36393b16] backdrop-blur-xl p-20'>
          <div className='text-center'>
            <img className='md:w-100 w-80 sm:w-80 xs:w-30' src='/logo.png' alt='Logo' />
            <p className='text-2xl' > Welcome To, </p>
            <p className='font-style: italic text-3xl font-bold text-[#41BBFF]'>Team Track</p>
            <p className='text-lg'>Assign tasks, track progress, celebrate success.</p><br/>
          </div>
            <form 
              onSubmit={(e)=>{
                submitHandler(e)
              }} 
             className='flex flex-col items-center justify-center'>
                <input value={email} 
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                 required className='text-white outline-none bg-transparent border-2 border-gray-700 py-3 px-5 text-xl rounded-lg placeholder-gray-400' type='email' placeholder='Enter Your Email'
                 />

                <input value={password}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                required className='text-white outline-none bg-transparent border-2 border-gray-700 py-3 px-5 mt-3 text-xl rounded-lg placeholder-gray-400' type='Password' placeholder='Enter Your Password'/>
                
                
                <button className='text-black outline-none border-none bg-[#41BBFF] py-3 px-5 mt-3 text-xl rounded-lg'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login
