import React from 'react'
import { supabase } from '../../utils/supabase';
import { toast } from 'sonner';
import TaskButton from '../ui/TaskButton';

const AcceptTask = ({data, onTaskUpdate}) => {

  const updateStatus = async (status) => {
    const { error } = await supabase
      .from('tasks')
      .update({ status })
      .eq('id', data.id);

    if (!error) {
      toast.success(`Task marked as ${status}`);
      if (onTaskUpdate) onTaskUpdate();
    } else {
      toast.error(`Error updating task: ${error.message}`);
    }
  };

  return (
    <div className='flex-shrink-0 flex flex-col justify-between h-full w-[340px] p-6 bg-notion-white border border-[rgba(0,0,0,0.1)] rounded-[12px] shadow-soft hover:shadow-deep transition-shadow relative overflow-hidden'>
        {/* Top Accent line to indicate active */}
        <div className="absolute top-0 left-0 w-full h-1 bg-notion-orange"></div>
        
        <div>
            <div className='flex justify-between items-center mb-4'>
                <span className='bg-orange-100 text-notion-orange text-[12px] font-semibold px-2 py-1 rounded-full uppercase tracking-wide-sm'>{data.category}</span>
                <span className='text-[14px] text-notion-gray-500 font-medium'>{data.date}</span>
            </div>
            <h2 className='text-[22px] font-bold text-notion-black tracking-tight-xs mb-2'>{data.title}</h2>
            <p className='text-[16px] text-notion-gray-500 leading-relaxed overflow-y-auto max-h-[140px] scrollbar-hide'>
                {data.description}
            </p>
        </div>
        <div className='flex justify-between mt-6 shrink-0 gap-3'>
            <TaskButton 
              label="Complete" 
              onClick={() => updateStatus('completed')} 
              color="#ffffff" 
              outlineColor="#1aae39" 
              className="flex-1"
            />
            <TaskButton 
              label="Fail" 
              onClick={() => updateStatus('failed')} 
              color="#ffffff" 
              outlineColor="#ff64c8" 
              className="flex-1"
            />
        </div>
    </div>
  )
}

export default AcceptTask
