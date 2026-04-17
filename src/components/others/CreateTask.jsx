import React, { useContext, useState } from 'react'
import { AuthContext } from '../Auth/AuthProvider'
import { supabase } from '../../utils/supabase'
import { toast } from 'sonner'

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
           toast.success("Success", {
              description: "Task created successfully!",
           });
           setTaskTitle('')
           setCategory('')
           setAsignTo('')
           setTaskDate('')
           setTaskDescription('')
           setPriority('medium')
        } else {
           toast.error("Error", {
              description: "Error creating task: " + error.message,
           });
        }
    }

    return (
    <div className='p-6 bg-notion-white dark:bg-notion-dark border border-[rgba(0,0,0,0.1)] dark:border-white/10 rounded-[12px] shadow-soft'>

        <form onSubmit={submitHandler} className='flex flex-wrap md:flex-nowrap w-full items-start gap-8'>
        
        <div className='w-full md:w-1/2 flex flex-col gap-4'>        
            <div>
                <h3 className='text-[14px] font-semibold text-notion-gray-500 dark:text-notion-gray-300 mb-1'>Task Title</h3>
                <input 
                value={taskTitle} 
                onChange={(e) => setTaskTitle(e.target.value)}
                className='text-[16px] py-2 px-3 w-full rounded-[4px] outline-none bg-notion-white dark:bg-black/20 border border-[#dddddd] dark:border-white/10 text-notion-black dark:text-notion-white placeholder-notion-gray-300 dark:placeholder-notion-gray-500 focus:ring-2 focus:ring-notion-focus-blue focus:border-transparent transition-shadow' type='text' placeholder='e.g., Update Design System'
                required
                ></input>
            </div>

            <div>
                <h3 className='text-[14px] font-semibold text-notion-gray-500 dark:text-notion-gray-300 mb-1'>Date</h3>
                <input 
                value={taskDate} 
                onChange={(e) => setTaskDate(e.target.value)}
                className='text-[16px] py-2 px-3 w-full rounded-[4px] outline-none bg-notion-white dark:bg-black/20 border border-[#dddddd] dark:border-white/10 text-notion-black dark:text-notion-white focus:ring-2 focus:ring-notion-focus-blue focus:border-transparent transition-shadow' type='date'
                required
                ></input>
            </div>

            <div>            
                <h3 className='text-[14px] font-semibold text-notion-gray-500 dark:text-notion-gray-300 mb-1'>Assign to</h3>
                <select 
                value={asignTo} 
                onChange={(e) => setAsignTo(e.target.value)}
                className='text-[16px] py-2 px-3 w-full rounded-[4px] outline-none bg-notion-white dark:bg-black/20 border border-[#dddddd] dark:border-white/10 text-notion-black dark:text-notion-white focus:ring-2 focus:ring-notion-focus-blue focus:border-transparent transition-shadow'
                required>
                    <option value="" disabled className='text-notion-gray-300'>Select Employee...</option>
                    {userData?.map((emp, idx) => (
                        <option key={idx} value={emp.firstName}>{emp.firstName}</option>
                    ))}
                </select>
            </div>

            <div className='flex gap-4'>
                <div className='w-1/2'>
                    <h3 className='text-[14px] font-semibold text-notion-gray-500 dark:text-notion-gray-300 mb-1'>Category</h3>
                    <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    className='text-[16px] py-2 px-3 w-full rounded-[4px] outline-none bg-notion-white dark:bg-black/20 border border-[#dddddd] dark:border-white/10 text-notion-black dark:text-notion-white focus:ring-2 focus:ring-notion-focus-blue focus:border-transparent transition-shadow'
                    required>
                        <option value="" disabled className='text-notion-gray-300'>Select Category...</option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Testing">Testing</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Product">Product</option>
                        <option value="Sales">Sales</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className='w-1/2'>
                    <h3 className='text-[14px] font-semibold text-notion-gray-500 dark:text-notion-gray-300 mb-1'>Priority</h3>
                    <select 
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value)}
                    className='text-[16px] py-2 px-3 w-full rounded-[4px] outline-none bg-notion-white dark:bg-black/20 border border-[#dddddd] dark:border-white/10 text-notion-black dark:text-notion-white focus:ring-2 focus:ring-notion-focus-blue focus:border-transparent transition-shadow'>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
            
        </div>
            
        <div className='w-full md:w-1/2 flex flex-col'>
            <h3 className='text-[14px] font-semibold text-notion-gray-500 dark:text-notion-gray-300 mb-1'>Description</h3>
            <textarea 
            value={taskDescription} 
            onChange={(e) => setTaskDescription(e.target.value)} 
            className='w-full flex-grow min-h-[220px] text-[16px] py-2 px-3 rounded-[4px] outline-none bg-notion-white dark:bg-black/20 border border-[#dddddd] dark:border-white/10 text-notion-black dark:text-notion-white placeholder-notion-gray-300 dark:placeholder-notion-gray-500 focus:ring-2 focus:ring-notion-focus-blue focus:border-transparent transition-shadow resize-none'
            placeholder='Add any details or context here...'
            ></textarea>
            
            <div className="mt-4 bg-gradient-to-b from-stone-300/40 dark:from-stone-600/40 to-transparent p-[2px] rounded-[16px] hover:cursor-pointer hover:scale-95 transition-all duration-600 w-fit">
              <button className="group p-[2px] rounded-[12px] bg-gradient-to-b from-white dark:from-[#2e2e2e] to-stone-200/40 dark:to-[#1a1a1a]/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-95 transition">
                <div className="flex items-center justify-center bg-gradient-to-b from-stone-200/40 dark:from-stone-600/40 to-white/80 dark:to-[#2a2a2a]/80 rounded-[8px] h-9 px-4 text-sm">
                  <span className="font-semibold text-black dark:text-white opacity-80">Create Task</span>
                </div>
              </button>
            </div>

        </div>

        </form>
      </div>
      
  )
}

export default CreateTask
