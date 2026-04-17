import React from 'react'
import { supabase } from '../../utils/supabase';
import { toast } from 'sonner';
import TaskButton from '../ui/TaskButton';

const NewTask = ({data, onTaskUpdate}) => {

  const handleAccept = async () => {
    const { error } = await supabase
      .from('tasks')
      .update({ status: 'active' })
      .eq('id', data.id);

    if (!error) {
      toast.success("Task accepted!");
      if (onTaskUpdate) onTaskUpdate();
    } else {
      toast.error(`Error accepting task: ${error.message}`);
    }
  };

  return (
        <div className='flex-shrink-0 flex flex-col justify-between h-full w-[340px] p-6 bg-notion-white border border-[rgba(0,0,0,0.1)] rounded-[12px] shadow-soft hover:shadow-deep transition-shadow'>
        <div>
            <div className='flex justify-between items-center mb-4'>
                <span className='bg-notion-badge-blue-bg text-notion-badge-blue-text text-[12px] font-semibold px-2 py-1 rounded-full uppercase tracking-wide-sm'>{data.category}</span>
                <span className='text-[14px] text-notion-gray-500 font-medium'>{data.date}</span>
            </div>
            <h2 className='text-[22px] font-bold text-notion-black tracking-tight-xs mb-2'>{data.title}</h2>
            <p className='text-[16px] text-notion-gray-500 leading-relaxed overflow-y-auto max-h-[140px] scrollbar-hide'>
                {data.description}
            </p>
        </div>
        <div className='mt-6 shrink-0'>
            <TaskButton 
              label="Accept Task" 
              onClick={handleAccept} 
              color="#ffffff" 
              outlineColor="#0075de" 
            />
        </div>
      </div>
  )
}

export default NewTask
