import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider'

const AllTask = () => {
  const [userData,setuserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 h-60 border-2 border-gray-700 rounded-xl bg-[#36393b16] backdrop-blur-xl '>
      <div className='bg-[#36393b16] mb-2  py-2 px-4 flex justify-between rounded'>
          <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
          <h3 className='text-lg font-medium w-1/5'>New Task</h3>
          <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
          <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
          <h5 className='text-lg font-medium w-1/5'>Failed</h5>
     </div>

     <div className='h-[80%] overflow-auto' id='num'>
       {userData?.map(function(elem, idx){
        return <div key={idx} className='border-2 border-[#36393b16] mb-2 py-2 px-4 flex justify-between rounded'>
                  <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
                  <h3 className='text-lg font-medium w-1/5 text-blue-400 '>{elem.taskCounts?.newTask || 0}</h3>
                  <h5 className='text-lg font-medium w-1/5 text-yellow-400' >{elem.taskCounts?.active || 0}</h5>
                  <h5 className='text-lg font-medium w-1/5 text-green-400' >{elem.taskCounts?.completed || 0}</h5>
                  <h5 className='text-lg font-medium w-1/5 text-red-400' >{elem.taskCounts?.failed || 0}</h5>
               </div> 
      })}
        
     </div>
    </div>
  )
}
  

export default AllTask
