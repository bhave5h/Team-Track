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

    // 1. Fetch entire company workload
    const { data: allTasks, error } = await supabase.from('tasks').select('*')
    
    if (error) {
      setAiContent("Failed to read database tasks: " + error.message)
      setLoadingAI(false)
      return;
    }

    // 2. Sent to AI for macro-analysis
    const summary = await getTaskSummary(allTasks, 'admin')
    
    setAiContent(summary)
    setLoadingAI(false)
  }

  return (
    <div className='h-screen w-full p-7 overflow-y-auto'>
      <Header changeUser={props.changeUser} data={{firstName: 'Admin'}} />
      
      <div className="flex justify-end w-full mb-4">
          <button 
            onClick={handleGenerateSummary}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-1"
          >
             ✨ Generate Team Summary
          </button>
      </div>

      <CreateTask />
      <AllTask/>

      <AIModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        loading={loadingAI} 
        content={aiContent} 
        title="Admin Team Overview" 
      />
    </div>
  )
}

export default AdminDashboard
