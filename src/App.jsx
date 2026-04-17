import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { supabase } from './utils/supabase'
import { AuthContext } from './components/Auth/AuthProvider'
import { Toaster } from './components/ui/toast'
import { toast } from 'sonner'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

useEffect(() =>{
  const loggedInUser = localStorage.getItem('loggedInUser')

  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setloggedInUserData(userData.data)
  }

},[])

  const handleLogin = async (email, password) => {
    // 1. Check if user is Admin
    const { data: adminData, error: adminError } = await supabase
      .from('admin')
      .select('*')
      .eq('email', email)
      .eq('password', password);

    if (adminData && adminData.length > 0) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminData[0] }))
      toast.success("Login Successful", {
        description: "Welcome back to Team Track",
      });
      return;
    }

    // 2. Check if user is Employee
    const { data: employeeData, error: employeeError } = await supabase
      .from('employees')
      .select('*')
      .eq('email', email)
      .eq('password', password);

    if (employeeData && employeeData.length > 0) {
      // Map the verified employee to the rich data stored in global Context (which includes mapped tasks)
      const richEmployeeData = userData?.find((e) => e.email === email);
      
      setUser('employee')
      setloggedInUserData(richEmployeeData || employeeData[0])
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: richEmployeeData || employeeData[0] }))
      toast.success("Login Successful", {
        description: "Welcome back to Team Track",
      });
      return;
    }

    toast.error("Login Failed", {
      description: "Invalid Credentials",
    });
}


  return (
    <>
      <Toaster />
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null) }
    </>
  )
}
export default App
















// emp dashboard
