import React, { useState } from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import AIModal from '../others/AIModal'
import { supabase } from '../../utils/supabase'
import { getTaskSummary } from '../../utils/ai'

const EmployeeDashboard = (props) => {
  const [dashboardData, setDashboardData] = useState(props.data);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loadingAI, setLoadingAI] = useState(false)
  const [aiContent, setAiContent] = useState('')

  const handleAskAI = async () => {
    setIsModalOpen(true)
    setLoadingAI(true)
    setAiContent('')

    // 1. Send localized tasks to AI 
    if (!dashboardData || !dashboardData.tasks || dashboardData.tasks.length === 0) {
      setAiContent("You currently have no assignments to analyze!")
      setLoadingAI(false)
      return;
    }

    const advice = await getTaskSummary(dashboardData.tasks, 'employee')
    
    setAiContent(advice)
    setLoadingAI(false)
  }

  const refetchData = async () => {
    const { data: tasksData, error } = await supabase
      .from('tasks')
      .select('*')
      .or(`assigned_to.eq.${dashboardData.firstName},assigned_to.eq.${dashboardData.email}`);

    if (tasksData && !error) {
      const taskCounts = {
          newTask: 0,
          active: 0,
          completed: 0,
          failed: 0
      };

      tasksData.forEach(task => {
          if (taskCounts[task.status] !== undefined) {
              taskCounts[task.status] += 1;
          }
      });

      setDashboardData({
        ...dashboardData,
        tasks: tasksData,
        taskCounts
      });
    }
  }

  return (
    <div className='p-10 h-screen overflow-y-auto'>
      <Header changeUser={props.changeUser}  data={dashboardData}/>
      
      <div className="flex justify-end w-full mb-2">
          <button 
            onClick={handleAskAI}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-1"
          >
             🎯 What should I do now?
          </button>
      </div>

      <TaskListNumbers data={dashboardData} />
      <TaskList data={dashboardData} onTaskUpdate={refetchData} />
      
      <AIModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        loading={loadingAI} 
        content={aiContent} 
        title="Personal Productivity Coach" 
      />
    </div>
  )
}

export default EmployeeDashboard
