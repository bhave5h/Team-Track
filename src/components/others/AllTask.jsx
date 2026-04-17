import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider'

const AllTask = () => {
  const [userData,setuserData] = useContext(AuthContext)

  return (
    <div className='bg-notion-white dark:bg-notion-dark border border-[rgba(0,0,0,0.1)] dark:border-white/10 rounded-[12px] shadow-soft overflow-hidden'>
      <div className='bg-notion-warm-white dark:bg-black/20 py-3 px-6 flex justify-between border-b border-[rgba(0,0,0,0.1)] dark:border-white/10'>
          <h2 className='text-[14px] font-semibold text-notion-gray-500 dark:text-notion-gray-300 uppercase tracking-wide-sm w-1/5'>Employee Name</h2>
          <h3 className='text-[14px] font-semibold text-notion-gray-500 dark:text-notion-gray-300 uppercase tracking-wide-sm w-1/5'>New Task</h3>
          <h5 className='text-[14px] font-semibold text-notion-gray-500 dark:text-notion-gray-300 uppercase tracking-wide-sm w-1/5'>Active Task</h5>
          <h5 className='text-[14px] font-semibold text-notion-gray-500 dark:text-notion-gray-300 uppercase tracking-wide-sm w-1/5'>Completed Task</h5>
          <h5 className='text-[14px] font-semibold text-notion-gray-500 dark:text-notion-gray-300 uppercase tracking-wide-sm w-1/5'>Failed</h5>
     </div>

     <div className='h-80 overflow-y-auto'>
       {userData?.map(function(elem, idx){
        return <div key={idx} className='py-4 px-6 flex justify-between  border-b border-[rgba(0,0,0,0.05)] dark:border-white/5 last:border-none hover:bg-black/5 dark:hover:bg-white/5 transition-colors'>
                  <h2 className='text-[16px] font-medium text-notion-black dark:text-notion-white w-1/5'>{elem.firstName}</h2>
                  <h3 className='text-[16px] text-notion-blue w-1/5 font-semibold'>{elem.taskCounts?.newTask || 0}</h3>
                  <h5 className='text-[16px] text-notion-orange w-1/5 font-semibold' >{elem.taskCounts?.active || 0}</h5>
                  <h5 className='text-[16px] text-notion-green w-1/5 font-semibold' >{elem.taskCounts?.completed || 0}</h5>
                  <h5 className='text-[16px] text-red-600 w-1/5 font-semibold' >{elem.taskCounts?.failed || 0}</h5>
               </div> 
      })}
        
     </div>
    </div>
  )
}
  
export default AllTask
