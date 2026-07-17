import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import Header from './components/header'
import ThemeSelector from './components/themeSelector'
import Home from './pages/home'
import Projects from './pages/projects'
import Calendar from './pages/calendar'

function App() {
  
  const [currentPage, setCurrentPage] = useState("Home")

  function handleSidebarClick(page){
    setCurrentPage(page)
  }

  

  return (
    <>
      <Header pageHeader={currentPage}/>
      <Sidebar currentPage={currentPage}
      handleSidebarClick={handleSidebarClick}/>
      {currentPage ==="Home" && <Home></Home>}
      {currentPage ==="Projects" && <Projects></Projects>}
      {currentPage ==="Calendar" && <Calendar></Calendar>}
    </>
  )
}

export default App
