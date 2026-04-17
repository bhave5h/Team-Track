import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './components/Auth/AuthProvider.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

<AuthProvider>
  <ThemeProvider>
    <App/>
  </ThemeProvider>
</AuthProvider>

    </React.StrictMode>,  
)

