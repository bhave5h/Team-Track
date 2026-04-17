import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailTask from './FailTask'

const TaskList = ({data, onTaskUpdate}) => {
  return (
    <div id='tasklist' className='h-[400px] overflow-x-auto flex items-stretch justify-start gap-6 w-full py-2 flex-nowrap'>
    
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
