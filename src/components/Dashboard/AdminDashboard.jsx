import React, { useState } from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import AIModal from '../others/AIModal'
import { supabase } from '../../utils/supabase'
import { getTaskSummary } from '../../utils/ai'

const AdminDashboard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loadingAI, setLoadingAI] = useState(false)
  const [aiContent, setAiContent] = useState('')

  const handleGenerateSummary = async () => {
    setIsModalOpen(true)
    setLoadingAI(true)
    setAiContent('')

    const { data: allTasks, error } = await supabase.from('tasks').select('*')
    
    if (error) {
      setAiContent("Failed to read database tasks: " + error.message)
      setLoadingAI(false)
      return;
    }

    const summary = await getTaskSummary(allTasks, 'admin')
    
    setAiContent(summary)
    setLoadingAI(false)
  }

  return (
    <div className='min-h-screen w-full font-sans'>
      <div className='max-w-[1200px] mx-auto p-8'>
        <Header changeUser={props.changeUser} data={{firstName: 'Admin'}} />
        
        <div className="flex justify-start w-full mb-8">
            <button 
              onClick={handleGenerateSummary}
              className="relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] hover:cursor-pointer" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-bold font-medium text-white backdrop-blur-3xl  hover:scale-95 transition-all duration-800 ">
                AI Insights
              </span>
            </button>
            
        </div>

        <div className="mb-12">
          <h2 className="text-[22px] font-bold tracking-tight-xs mb-4 text-notion-black dark:text-notion-white">Create New Task</h2>
          <CreateTask />
        </div>

        <div>
          <h2 className="text-[22px] font-bold tracking-tight-xs mb-4 text-notion-black dark:text-notion-white">All Tasks</h2>
          <AllTask/>
        </div>

        <AIModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          loading={loadingAI} 
          content={aiContent} 
          title="Team Overview" 
        />
      </div>
    </div>
  )
}

export default AdminDashboard
