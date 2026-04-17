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
    <div className='min-h-screen w-full font-sans'>
      <div className='max-w-[1200px] mx-auto p-8'>
        <Header changeUser={props.changeUser}  data={dashboardData}/>
        
        <div className="flex justify-start w-full mb-8">
            <button 
              onClick={handleAskAI}
              className="relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] hover:cursor-pointer" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-bold font-medium text-white backdrop-blur-3xl  hover:scale-95 transition-all duration-800 ">
                What should I do now?
              </span>
            </button>
        </div>

        <TaskListNumbers data={dashboardData} />
        
        <div className="mt-12 bg-notion-warm-white dark:bg-black/20 -mx-8 px-8 py-10 border-y border-black/10 dark:border-white/10">
          <div className="max-w-[1200px] mx-auto">
             <h2 className="text-[26px] font-bold tracking-tight-sm mb-6 text-notion-black dark:text-notion-white">Your Tasks</h2>
             <TaskList data={dashboardData} onTaskUpdate={refetchData} />
          </div>
        </div>
        
        <AIModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          loading={loadingAI} 
          content={aiContent} 
          title="Personal Productivity Coach" 
        />
      </div>
    </div>
  )
}

export default EmployeeDashboard
