import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailTask from './FailTask'

const TaskList = ({data, onTaskUpdate}) => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5  w-full py-5 flex-nowrap mt-10'>
    
    {data.tasks.map((elem, idx)=>{
      if(elem.status === 'active'){
        return <AcceptTask key={idx} data={elem} onTaskUpdate={onTaskUpdate} />
      }
      if(elem.status === 'newTask'){
        return <NewTask key={idx} data={elem} onTaskUpdate={onTaskUpdate} />
      }
      if(elem.status === 'completed'){
        return <CompleteTask key={idx} data={elem} onTaskUpdate={onTaskUpdate} />
      }
      if(elem.status === 'failed'){
        return <FailTask key={idx} data={elem} onTaskUpdate={onTaskUpdate} />
      }
    })}
    </div>
  )
}

export default TaskList
