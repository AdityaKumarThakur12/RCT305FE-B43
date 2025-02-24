import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/homePage'
import Grade from './pages/grade'
import CourseDetails from './pages/courseDetails'
import StudentProfile from './pages/studentProfile'
import AssignmentDetail from './pages/assignment'
import { ThemeProvider } from './context/themeContext'

function App() {
 

  return (
    <>
    {/* <ThemeProvider> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/grade' element={<Grade/>}/>
        <Route path='/course-details' element={<CourseDetails/>}/>
        <Route path='/assignment-detail' element={<AssignmentDetail/>}/>
        <Route path='/profile' element={<StudentProfile/>}/>

      </Routes>
    </BrowserRouter>
    {/* </ThemeProvider> */}
    
    
     
    </>
  )
}

export default App
