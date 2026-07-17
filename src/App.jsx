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
  const [tableData, setTableData] = useState([ 
        {id: 1, projectName: 'The Game that Lost Epic $1,000,000', members: ["John ", "Rich ", "Mary ", "Bob"], completion: "50%"},
        {id: 2, projectName: "Walking Across the Solar System in No Mans Sky", members: ["Alex ", "Jimmy ", "Greg ", "Troy"], completion: "12%"},
        {id: 3, projectName: "Epic We Need to Talk", members: ["Jake ", "Justin ", "Kowalski ", "Alisson"], completion: "100%"},
        {id: 4, projectName: "Droid Tycoon Droid Duplication Glitch", members: ["Sam ", "Caden ", "Abraham"], completion: "25%"},
        {id: 5, projectName: "Droid Tycoon is Hiding this From You", members:["Jack ", "Jill"], completion: "45%"},
        {id: 6, projectName: "Sick of Brainrot Games, Play This Instead", members:["Benjamin ", "Jason ", "Clark ", "Donald"], completion: "15%"},
        {id: 7, projectName: "Droid Tycoon is Hiding this From You", members:["Jack ", "Jill"], completion: "45%"},
        {id: 8, projectName: "Droid Tycoon Mr Bones Event is Here!", members:["Quentin ", "Michael ", "Hassan ", "Julia"], completion: "89%"},
        {id: 9, projectName: "I Turned My House into a Swimming Pool", members:["Ryan ", "Andrew ", "Kaleb ", "Ava ", "Craig ", "Gillian"], completion: "5%"},
        {id: 10, projectName: "I Coded Minecraft to Be More Satisfying", members:["Talia ", "Killian ", "George"], completion: "11%"}
    ])


  function handleSidebarClick(page){
    setCurrentPage(page)
  }

  

  return (
    <>
      <Header pageHeader={currentPage}/>
      <Sidebar currentPage={currentPage}
      handleSidebarClick={handleSidebarClick}/>
      {currentPage ==="Home" && <Home tableData={tableData}></Home>}
      {currentPage ==="Projects" && <Projects tableData={tableData}></Projects>}
      {currentPage ==="Calendar" && <Calendar></Calendar>}
    </>
  )
}

export default App
