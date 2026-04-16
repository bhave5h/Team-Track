import React, { useState } from 'react'

const Header = (props) => {
  const displayName = props.data?.firstName || props.data?.name || "Admin";
  const rawFirstName = displayName.split(' ')[0];
  const avatarName = rawFirstName.charAt(0).toUpperCase() + rawFirstName.slice(1);
  const avatarUrl = "/Profile/" + avatarName + ".jpg";

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  return (
    <div className='flex flex-col md:flex-row items-center justify-between mb-8 md:mb-10 py-4 gap-6'>
        
        <div className="text-center md:text-left w-full md:w-auto">
          <h1 className="text-3xl md:text-3xl font-bold text-white">
            Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 montserrat-light">{displayName}</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl gochi-hand-regular mt-1">Welcome back to your dashboard.</p>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-6 md:gap-8">
       
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-emerald-500 p-1 cursor-pointer shadow-lg shadow-emerald-500/20">
            <img src={avatarUrl} onError={(e) => { e.target.src = "https://i.pravatar.cc/150?img=11" }} alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>

          <button onClick={logOutUser} className="flex justify-center items-center gap-2 bg-[#737d8388] hover:bg-red-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">Log Out</button>
        </div>

    </div>
  )
}

export default Header
