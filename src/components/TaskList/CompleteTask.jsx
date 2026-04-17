import React from 'react'
import TaskButton from '../ui/TaskButton'

const CompleteTask = ({data}) => {
  return (
 <div className='flex-shrink-0 flex flex-col justify-between h-full w-[340px] p-6 bg-notion-white border border-[rgba(0,0,0,0.1)] rounded-[12px] shadow-soft hover:shadow-deep transition-shadow opacity-80 relative overflow-hidden'>
        {/* Top Accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-notion-green"></div>
        
        <div>
            <div className='flex justify-between items-center mb-4'>
                <span className='bg-green-100 text-notion-green text-[12px] font-semibold px-2 py-1 rounded-full uppercase tracking-wide-sm'>{data.category}</span>
                <span className='text-[14px] text-notion-gray-500 font-medium'>{data.date}</span>
            </div>
            <h2 className='text-[22px] font-bold text-notion-black tracking-tight-xs mb-2 line-through decoration-notion-gray-300'>{data.title}</h2>
            <p className='text-[16px] text-notion-gray-500 leading-relaxed overflow-y-auto max-h-[100px] scrollbar-hide'>
                {data.description}
            </p>
        </div>
        <div className='mt-6 shrink-0'>
            <TaskButton 
              label="Completed" 
              color="#dcffe4" 
              outlineColor="#1aae39" 
              disabled={true}
            />
        </div>
        
      </div>
  )
}

export default CompleteTask
