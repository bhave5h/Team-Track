import React from 'react'
import { supabase } from '../../utils/supabase';

const NewTask = ({data, onTaskUpdate}) => {

  const handleAccept = async () => {
    const { error } = await supabase
      .from('tasks')
      .update({ status: 'active' })
      .eq('id', data.id);

    if (!error && onTaskUpdate) {
      onTaskUpdate();
    }
  };

  return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#41bdff42] rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>
            {data.description}
        </p>
        <div className='mt-4'>
            <button onClick={handleAccept} className='bg-green-500 py-1 px-2 text-sm rounded'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
