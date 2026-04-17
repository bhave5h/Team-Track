import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'
import { toast } from 'sonner'

const Header = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const displayName = props.data?.firstName || props.data?.name || "Admin";
  const rawFirstName = displayName.split(' ')[0];
  const avatarName = rawFirstName.charAt(0).toUpperCase() + rawFirstName.slice(1);
  const avatarUrl = "/Profile/" + avatarName + ".jpg";

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    toast.success("Logged Out", {
      description: "You have been successfully logged out.",
    });
  }

  return (
    <div className='flex flex-col md:flex-row items-center justify-between mb-8 pb-4 gap-6 border-b border-black/10 dark:border-white/10'>
        
        <div className="text-center md:text-left w-full md:w-auto">
          <h1 className="text-[26px] font-bold tracking-tight-sm text-notion-black dark:text-notion-white">
            {displayName}'s Workspace
          </h1>
          <p className="text-[16px] text-notion-gray-500 font-semibold dark:text-notion-gray-300 mt-1">Manage all Tasks and track progress.</p>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-3">

          <div className="flex justify-center items-center h-full">
            <div className="bg-gradient-to-b from-stone-300/40 dark:from-stone-600/40 to-transparent p-[2px] rounded-[16px]">
              <div className="group p-[2px] rounded-[12px] bg-gradient-to-b from-white dark:from-[#2e2e2e] to-stone-200/40 dark:to-[#1a1a1a]/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] cursor-pointer transition-transform flex items-center justify-center">
                <div className="flex justify-center items-center bg-gradient-to-b from-stone-200/40 dark:from-stone-600/40 to-white/80 dark:to-[#2a2a2a]/80 rounded-[8px] w-9 h-9 overflow-hidden p-[0.5px]">
                  <img src={avatarUrl} onError={(e) => { e.target.src = "https://i.pravatar.cc/150?img=11" }} alt="Profile" className="w-full h-full object-cover rounded-[11px]" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center h-full ">
            <div className="bg-gradient-to-b from-stone-300/40 dark:from-stone-600/40 to-transparent p-[2px] rounded-[16px] hover:cursor-pointer hover:scale-95 transition duration-600">
              <button onClick={toggleTheme} aria-label="Toggle Dark Mode" className="group p-[2px] rounded-[12px] bg-gradient-to-b from-white dark:from-[#2e2e2e] to-stone-200/40 dark:to-[#1a1a1a]/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995] flex items-center justify-center">
                <div className="flex items-center justify-center bg-gradient-to-b from-stone-200/40 dark:from-stone-600/40 to-white/80 dark:to-[#2a2a2a]/80 rounded-[8px] w-9 h-9 text-notion-black dark:text-notion-white">
                  {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                </div>
              </button>
            </div>
          </div>
       


          <div className="flex justify-center items-center h-full ">
            <div className="bg-gradient-to-b from-stone-300/40 dark:from-stone-600/40 to-transparent p-[2px] rounded-[16px] hover:cursor-pointer hover:scale-95 transition-all duration-600">
              <button onClick={logOutUser} className="group p-[2px] rounded-[12px] bg-gradient-to-b from-white dark:from-[#2e2e2e] to-stone-200/40 dark:to-[#1a1a1a]/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-95 transition">
                <div className="flex items-center justify-center bg-gradient-to-b from-stone-200/40 dark:from-stone-600/40 to-white/80 dark:to-[#2a2a2a]/80 rounded-[8px] h-9 px-4 text-sm">
                  <span className="font-semibold text-black dark:text-white opacity-80">Log Out</span>
                </div>
              </button>
            </div>
          </div>
   
        </div>

    </div>
  )
}

export default Header
