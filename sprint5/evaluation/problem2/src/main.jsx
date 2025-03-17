import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './contextAPI/userContext.jsx'
import { TaskProvider } from './contextAPI/taskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      {/* <TaskProvider> */}
        <App />
      {/* </TaskProvider> */}
    </UserProvider>

  </StrictMode>,
)
