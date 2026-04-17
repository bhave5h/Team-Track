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
    <div className='flex h-screen w-screen items-center justify-center p-6 bg-notion-warm-white dark:bg-black/90'>
        <div className='w-full max-w-md bg-notion-white dark:bg-notion-dark border border-[rgba(0,0,0,0.1)] dark:border-white/10 shadow-soft rounded-[12px] p-10'>
          <div className='text-center mb-1'>
            <img className='w-70 mx-auto mb-1' src='/logo.png' alt='Logo' />
            <h1 className='text-[20px] font-semibold tracking-tight-sm text-notion-black dark:text-notion-white opacity-60'>Wellcome To</h1>
            <h1 className='text-[30px] font-bold tracking-tight-sm text-[#4DBAF6] mb-2 italic'>Team Track</h1>
            <p className='text-[16px] text-notion-gray-500 dark:text-gray-300'>Assign tasks, track progress, celebrate success.</p>
          </div>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                <div>
                  <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    className='w-full text-notion-black dark:text-notion-white outline-none bg-notion-white dark:bg-black/20 border border-[#dddddd] dark:border-white/10 py-2 px-3 text-[16px] rounded-[4px] placeholder-notion-gray-300 dark:placeholder-notion-gray-500 focus:ring-2 focus:ring-notion-focus-blue focus:border-transparent transition-shadow' 
                    type='email' 
                    placeholder='Enter your email'
                  />
                </div>

                <div>
                  <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    className='w-full text-notion-black dark:text-notion-white outline-none bg-notion-white dark:bg-black/20 border border-[#dddddd] dark:border-white/10 py-2 px-3 text-[16px] rounded-[4px] placeholder-notion-gray-300 dark:placeholder-notion-gray-500 focus:ring-2 focus:ring-notion-focus-blue focus:border-transparent transition-shadow' 
                    type='password' 
                    placeholder='Enter your password'
                  />
                </div>

                <button className="w-fit mx-auto group p-[2px] rounded-[12px] bg-gradient-to-b from-white dark:from-[#2e2e2e] to-stone-200/40 dark:to-[#1a1a1a]/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-95 transition">
                  <div className="flex items-center justify-center bg-gradient-to-b from-stone-200/40 dark:from-stone-600/40 to-white/80 dark:to-[#2a2a2a]/80 rounded-[8px] h-9 px-4 text-sm">
                    <span className="font-semibold text-black dark:text-white opacity-80">Log In</span>
                  </div>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login
