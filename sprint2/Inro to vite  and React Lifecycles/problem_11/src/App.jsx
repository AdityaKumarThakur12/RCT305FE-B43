import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Content } from './components/content'
import { Footer } from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
     <Navbar/>
     <Content/>
     <Footer/>
    </>
  )
}

export default App
