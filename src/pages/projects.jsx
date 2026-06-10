import { useState } from "react"
import { Chart as ChartJS, plugins, Legend, Title, BarElement, ArcElement} from "chart.js"
import { Bar , Doughnut} from 'react-chartjs-2'
import  Button  from "@mui/material/Button"
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';


ChartJS.register(BarElement, ArcElement, Title, Legend)

function NewProjectBtn({handleClick}){
    return<><Button 
    sx={{ backgroundColor: 'var(--accent)'}}
    variant="contained" 
    startIcon={<AddIcon />} 
    onClick={handleClick}>Create New Project</Button></>
}


function BarChartCard(){
    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
            label: "Completed", 
            data: [50, 100, 75, 130, 150],
            backgroundColor: "rgb(18, 36, 235)"
        },
        {
            label: "Under Review",
            data: [135, 120, 90, 60, 75],
            backgroundColor: "rgb(137, 146, 236)"
        },
        {
            label: "In Progress",
            data: [35, 65, 125, 43, 109],
            backgroundColor: "rgb(51, 163, 190)"
        }]
    }

    const options={
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Tasks Completed Per Day",
            }
        }
    }
    
    return(
        <div className="projectsBarChart">
            <Bar 
            options={options}
            data={data} />
        </div>
    )
}

function DonutChartCard(){
    
    const data = {
        labels: ["Completed", "Under Review", "In Progress", "To Do"],
        datasets: [
            {
                label: "Tasks Per Day",
                data: [250, 150, 108, 75],
                backgroundColor: [
                    'rgb(18, 36, 235)',
                    'rgb(137, 146, 236)',
                    'rgb(51, 163, 190)',
                    'rgb(65, 255, 182)'
                ],
            }]
    }

    const options={
        responsive: true,
        maintainAspectRatio:false,
        plugins: {
            legend:{
                position: "bottom",
                align: 'start',
            },
            title: {
                display: true,
                text: "Task Wise",
            }
        }
    }

    return(
        <div className="donutChartCard">
            <Doughnut
            data={data}
            options={options}></Doughnut>
        </div>
    )
}

function ProjectsTable({tableData, handleOpenModal}){
    
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Members</th>
                    <th>Completion</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((project) => (
                    <tr onClick={() => handleOpenModal(project.id)} key={project.id}>
                        <td >{project.projectName}</td>
                        <td>{project.members}</td>
                        <td><progress value={Number(project.completion.slice(0, project.completion.length - 1))} max={100}></progress>{project.completion}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

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

function NewProjectModal({handleCloseNewProjectModal, handleProjectForm}){
    return(
        <div className="modal-overlay" onClick={handleCloseNewProjectModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleProjectForm}>
                    <h1>Title: </h1>
                    <input 
                    onClick={(e) => e.stopPropagation()}
                    id="title" 
                    name="title" type="text" 
                    placeholder="Please type in the title of your video"></input>
                    <h1>Add a Thumbnail Image</h1>
                    <input 
                    onClick={(e) => e.stopPropagation()}
                    id="thumbnail" type="file" name="thumbnail" accept="image/png, image/jpeg" />
                    <h1>Video Summary</h1>
                    <textarea 
                    onClick={(e) => e.stopPropagation()}
                    id="summary" name="summary" placeholder="Write a 2-3 sentence summary to tell everyone what your video is about"></textarea>
                    <h1>Team Members</h1>
                    <input 
                    onClick={(e) => e.stopPropagation()}
                    id="members" type="text" name="members" placeholder="Which team members will you assign this project to"></input>
                    <h1>Due Date:</h1>
                    <input 
                    onClick={(e) => e.stopPropagation()}
                    type="date" id="dueDate" name="dueDate"></input>
                    <Button 
                    onClick={(e) => e.stopPropagation()}
                    sx={{ backgroundColor: 'var(--accent)', margin:'var(--spacing-md'}}
                    variant="contained" type="submit">Save Project</Button>
                </form>
            </div>
        </div>
    )
}

export default function Projects(){

    const [isModalOpen, setisModalOpen] = useState(false)
    const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false)

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

    const [foundProject, setFoundProject] = useState(null)

    function handleOpenModal(id){
        setFoundProject(tableData.find(project => project.id === id))
        setisModalOpen(true)
    }

    function handleCloseModal(){
        setisModalOpen(false)
    }

    function handleNewProjectClick(){
        setIsNewProjectModalOpen(true)
    }

    function handleCloseNewProjectModal(){
        setIsNewProjectModalOpen(false)
    }

    function handleProjectForm(e){
        //get all form data
        //add information to a new entry in the projects table
        //move all the projects down an id and make this new project the first 
        //since it was most recently added
        e.preventDefault()
        const formData = new FormData(e.target) 
        const data = (Object.fromEntries(formData))
        
        setTableData(prevTable => {
            const newItem = { projectName: data.title, members: [data.members], completion: "0%"}
            return [newItem, ...prevTable].map((item, index) => ({...item, id: index + 1}))
        })

        setIsNewProjectModalOpen(false)
    }

    return(
        <div className="projects-page">
            <NewProjectBtn handleClick={handleNewProjectClick}></NewProjectBtn>
            <div className="project-charts-container">
                <BarChartCard />
                <DonutChartCard />
            </div>
            
            <div className="project-table-container">
                <ProjectsTable tableData={tableData} handleOpenModal={handleOpenModal}></ProjectsTable>
            </div>
            { isModalOpen === true && <ProjectModal handleCloseModal={handleCloseModal} foundProject={foundProject}></ProjectModal> }
            { isNewProjectModalOpen === true && <NewProjectModal handleCloseNewProjectModal={handleCloseNewProjectModal} handleProjectForm={handleProjectForm}></NewProjectModal>}
        </div>
    )
}