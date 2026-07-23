import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import Header from './components/header'
import ThemeSelector from './components/themeSelector'
import Home from './pages/home'
import Projects from './pages/projects'
import Calendar from './pages/calendar'
import  Button  from "@mui/material/Button"
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

function ProjectModal({handleCloseModal, foundProject}){
    return(
        <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h1>Title:</h1>
                <h2>{foundProject.projectName}</h2><EditIcon></EditIcon>
                <h1>Thumbnail:</h1>
                <img></img><Button variant="contained">Add/Change Image</Button>
                <h1>Video Summary:</h1>
                <p>There is one video game that Epic Games created in 2009 called The Adventures of Blabbity Bla: Return to the Land of Blabbity Bla.
                    They hired 13 programmers, 10 voice actors, 4 animators, and sunk $1,000,000 into it. Everything was going good until somebody opened their email
                    and accidentally unleashed a virus that deleted all the progress they had.
                </p><EditIcon></EditIcon>
                <p>Team Members: {foundProject.members}</p>
            </div>
        </div>
    )
}

function App() {
  
  const [currentPage, setCurrentPage] = useState("Home")
  const [foundProject, setFoundProject] = useState(null)
  const [isModalOpen, setisModalOpen] = useState(false)
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

  function handleOpenModal(id){
        setFoundProject(tableData.find(project => project.id === id))
        setisModalOpen(true)
  }
  
  function handleCloseModal(){
        setisModalOpen(false)
    }

  return (
    <>
      <Header tableData={tableData} handleOpenModal={handleOpenModal} pageHeader={currentPage}/>
      <Sidebar currentPage={currentPage}
      handleSidebarClick={handleSidebarClick}/>
      { isModalOpen === true && <ProjectModal handleCloseModal={handleCloseModal} foundProject={foundProject}></ProjectModal> }
      {currentPage ==="Home" && <Home tableData={tableData}></Home>}
      {currentPage ==="Projects" && <Projects tableData={tableData}></Projects>}
      {currentPage ==="Calendar" && <Calendar></Calendar>}
    </>
  )
}

export default App
