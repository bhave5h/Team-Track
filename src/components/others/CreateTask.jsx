import React, { useContext, useState } from 'react'
import { AuthContext } from '../Auth/AuthProvider'
import { supabase } from '../../utils/supabase'

const CreateTask = () => {

    const [userData, setuserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')  
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [priority, setPriority] = useState('medium')

    const submitHandler = async (e) => {
        e.preventDefault()

        const { error } = await supabase.from('tasks').insert({
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category: category,
            status: 'newTask',
            assigned_to: asignTo,
            priority: priority
        })

        if (!error) {
           alert("Task created successfully!");
           setTaskTitle('')
           setCategory('')
           setAsignTo('')
           setTaskDate('')
           setTaskDescription('')
           setPriority('medium')
        } else {
           alert("Error creating task: " + error.message)
        }
    }

    return (
    <div className='p-5 mt-7 border-2 border-gray-700 rounded-xl bg-[#36393b16] backdrop-blur-xl'>

        <form onSubmit={(e)=>{
            submitHandler(e)
        }} 
        className='flex flex-wrap w-full items-start justify-between'>
        
        <div className='w-1/2'>        
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle} 
                    onChange={(e)=>{
                    setTaskTitle(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 ' type='text' placeholder='Enter task'
                ></input>
            </div>

            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input 
                    value={taskDate} 
                    onChange={(e)=>{
                    setTaskDate(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 ' type='date'
                ></input>
            </div>

            <div>            
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <select 
                    value={asignTo} 
                    onChange={(e)=>{
                    setAsignTo(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 text-white'>
                    <option value="" disabled className='bg-[#1c1c1c] text-gray-400'>Select Employee...</option>
                    {userData?.map((emp, idx) => (
                        <option key={idx} value={emp.firstName} className='bg-[#1c1c1c]'>{emp.firstName}</option>
                    ))}
                </select>
            </div>

            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Priority</h3>
                <select 
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value)}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 text-white'>
                    <option value="low" className='bg-[#1c1c1c]'>Low</option>
                    <option value="medium" className='bg-[#1c1c1c]'>Medium</option>
                    <option value="high" className='bg-[#1c1c1c]'>High</option>
                </select>
            </div>

            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                    value={category} 
                    onChange={(e)=>{
                    setCategory(e.target.value)
                }} 
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 ' type='text' placeholder='design'
                ></input>
            </div>
            
        </div>
            
        <div className='w-1/2 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea 
                    value={taskDescription} 
                    onChange={(e)=>{
                    setTaskDescription(e.target.value)
                }} 
            className='w-full h-44 text-sm py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
            <button className='bg-[#41BBFF] py-3 hover:bg-emerald-600 px-5 rounded text-lg font-bold mt-4 w-full'>Create Task</button>
        </div>

        </form>
      </div>
      
  )
}

export default CreateTask
