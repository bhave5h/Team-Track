import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-8'>
      
      <div className='rounded-[12px] p-6 bg-notion-white border border-[rgba(0,0,0,0.1)] shadow-soft'>
        <h2 className='text-[40px] font-bold tracking-tight-lg text-notion-black leading-none mb-2'>{data.taskCounts.newTask}</h2>
        <h3 className='text-[16px] font-medium text-notion-gray-500'>New Tasks</h3>
      </div>
      
      <div className='rounded-[12px] p-6 bg-notion-white border border-[rgba(0,0,0,0.1)] shadow-soft'>
        <h2 className='text-[40px] font-bold tracking-tight-lg text-notion-black leading-none mb-2'>{data.taskCounts.completed}</h2>
        <h3 className='text-[16px] font-medium text-notion-gray-500'>Completed Tasks</h3>
      </div>
      
      <div className='rounded-[12px] p-6 bg-notion-white border border-[rgba(0,0,0,0.1)] shadow-soft'>
        <h2 className='text-[40px] font-bold tracking-tight-lg text-notion-black leading-none mb-2'>{data.taskCounts.active}</h2>
        <h3 className='text-[16px] font-medium text-notion-gray-500'>Active Tasks</h3>
      </div>
      
      <div className='rounded-[12px] p-6 bg-notion-white border border-[rgba(0,0,0,0.1)] shadow-soft'>
        <h2 className='text-[40px] font-bold tracking-tight-lg text-notion-black leading-none mb-2'>{data.taskCounts.failed}</h2>
        <h3 className='text-[16px] font-medium text-notion-gray-500'>Failed Tasks</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
