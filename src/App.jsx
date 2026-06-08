import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import Home from './pages/home'
import Projects from './pages/projects'
import Calendar from './pages/calendar'

function App() {
  
  const [currentPage, setCurrentPage] = useState("home")

  function handleSidebarClick(page){
    setCurrentPage(page)
  }

  

  return (
    <>
      <Sidebar currentPage={currentPage}
      handleSidebarClick={handleSidebarClick}/>
      {currentPage ==="home" && <Home></Home>}
      {currentPage ==="projects" && <Projects></Projects>}
      {currentPage ==="calendar" && <Calendar></Calendar>}
    </>
  )
}

export default App
