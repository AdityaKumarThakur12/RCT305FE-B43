import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Dashboard from './components/dashboard'
import TaskView from './components/task'
import CreateTask from './components/create'

const App = () => {
  return (
    <>
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/task/:taskId' element={<TaskView />} />
          <Route path='/create' element={<CreateTask />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
