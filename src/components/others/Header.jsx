import React, { useState } from 'react'

const Header = (props) => {
  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }


  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-10 py-4 gap-4'>
        
        <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Hello, <span className="text-white montserrat-light">{props.user}</span>
        </h1>
        <p className="text-dark-muted text-xl gochi-hand-regular">Welcome back to your dashboad.</p>
      </div>

        <div className="flex items-center gap-4 self-end md:self-auto">
       
        <div className="w-20 h-20 rounded-full bg-dark-input border border-gray-700/50 p-1 cursor-pointer">
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>

        <button onClick={logOutUser} className="flex items-center gap-2 bg-[#737d8388] hover:bg-red-500 text-white hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group">Log Out</button>
    </div>
  )
}

export default Header
