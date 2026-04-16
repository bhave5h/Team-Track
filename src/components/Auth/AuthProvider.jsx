import React, { createContext, useEffect, useState } from 'react'
import { supabase } from '../../utils/supabase'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userData, setuserData] = useState(null)

    useEffect(() => {
        const fetchSupabaseData = async () => {
            const { data: employeesData, error: empError } = await supabase.from('employees').select('*');
            const { data: tasksData, error: taskError } = await supabase.from('tasks').select('*');

            if (empError || taskError) {
                console.error("Error fetching data:", empError || taskError);
                return;
            }

            // Map tasks to employees and re-calculate taskCounts
            const structuredEmployees = employeesData.map(emp => {
                // Adjusting mappings to match original JS schema expectation
                const empTasks = tasksData.filter(task => task.assigned_to === emp.name || task.assigned_to === emp.email);
                
                const taskCounts = {
                    newTask: 0,
                    active: 0,
                    completed: 0,
                    failed: 0
                };

                empTasks.forEach(task => {
                    if (taskCounts[task.status] !== undefined) {
                        taskCounts[task.status] += 1;
                    }
                });

                return {
                    id: emp.id,
                    firstName: emp.name, // Mapping 'name' from Supabase back to 'firstName'
                    email: emp.email,
                    password: emp.password,
                    taskCounts,
                    tasks: empTasks
                };
            });

            setuserData(structuredEmployees);
        };

        fetchSupabaseData();
    }, [])
    
  return (
    <div>
        <AuthContext.Provider value={[userData,setuserData]}>
             {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
