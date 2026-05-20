import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, plugins} from "chart.js"
import { Timeline } from '@mui/lab';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

function ChartsContainer({children}){
    return(
        <div className="chartsContainer">{children}</div>
    )
}

function RevenueChartCard(){
    const options={
        responsive: true,
        plugins: {
            legend:{
                position: "bottom",
            },
            title: {
                display: true,
                text: "Revenue Per Day",
            }
        }
    }

    const data={
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday", "Sunday"],
        datasets: [{
            label:"Revenue",
            data: [1000, 500, 200, 350, 800, 700, 900],
            borderColor: "rgb(62, 50, 233)", 
        }]
    }
    
    return(
        <div className="revenueChartCard">
            <Line 
            options={options}
            data={data}
            ></Line>
        </div>
    )
}

function SubsChartCard(){
    
    const options={
        responsive: true,
        plugins: {
            legend:{
                position: "bottom",
            },
            title: {
                display: true,
                text: "Subscribers Per Day",
            }
        }
    }
    const data={
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday", "Sunday"],
        datasets: [{
            label:"Subscribers",
            data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
            borderColor: "rgb(75, 192, 192)", 
        }]
    }

    return(
        <div className="subsChartCard">
        <Line
            data={data}
            options={options}
        />
        </div>
    )
}

function StatBar({children}){
    return(
        <div className="statBar">
            {children}
        </div>
    )
}

function StatCard({name, stat, statGrowth}){
    return(
        <div className="statcard">
        <h2>{name}</h2>
        <h1>{stat}</h1><p>{statGrowth}</p>
        </div>
    )
}

function ProjectsSummaryCard({children}){
    return(
        <div className="projectsSummary">{children}</div>
    )
}

function ProjectsTable(){
    const data =[ 
        {id: 1, projectName: 'The Game that Lost Epic $1,000,000', members: ["John ", "Rich ", "Mary ", "Bob"], completion: "50%"},
        {id: 2, projectName: "Walking Across the Solar System in No Mans Sky", members: ["Alex ", "Jimmy ", "Greg ", "Troy"], completion: "12%"},
        {id: 3, projectName: "Epic We Need to Talk", members: ["Jake ", "Justin ", "Kowalski ", "Alisson"], completion: "100%"},
        {id: 4, projectName: "Droid Tycoon Droid Duplication Glitch", members: ["Sam ", "Caden ", "Abraham"], completion: "25%"},
        {id: 5, projectName: "Droid Tycoon is Hiding this From You", members:["Jack ", "Jill"], completion: "45%"}
    ]
    
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
                {data.map((project) => (
                    <tr key={project.id}>
                        <td>{project.projectName}</td>
                        <td>{project.members}</td>
                        <td>{project.completion}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

function ProjectHistoryCard({children}){
    return(
        <div className="projectHistoryCard">
            <h1 className="prHistoryHeading">Project History</h1>
            {children}
        </div>
    )
}

function ProjectHistoryTimeline(){
    
    const timeline = [
        {id: 1, name: "This UEFN Game is Hiding Something"},
        {id: 2, name: "I Waited 15 Years for This Game"},
        {id: 3, name: "I Built a 1:1 Star Destroyer in Minecraft"},
        {id: 4, name: "This Horror Game is Based on a TRUE Story"}
    ]

    return(
        <Timeline sx={{ width: "260px", 
            [`& .${timelineItemClasses.root}:before`]: {
                flex: 0, 
                padding: 0,
            },
         }}>
             {timeline.map(project => 
                <TimelineItem key={project.id}>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{project.name}</TimelineContent>
            </TimelineItem>
            )} 
        </Timeline>
    )
}

export default function Home(){

    return(
        <div className="home">
        <StatBar>
            <StatCard name="Subscribers" stat="25,937" statGrowth="+235"/>
            <StatCard name="Revenue" stat="$18,233" statGrowth="+$1,300"/>
            <StatCard name="Views" stat="130,000" statGrowth="+22,500" />
            <StatCard name="Watch time (hours)" stat="30.5k" statGrowth="+2.5k" />
        </StatBar>
        <ChartsContainer>
            <SubsChartCard />
            <RevenueChartCard />
        </ChartsContainer>
        <ProjectsSummaryCard>
            <ProjectsTable></ProjectsTable>
            <ProjectHistoryCard>
                <ProjectHistoryTimeline></ProjectHistoryTimeline>
            </ProjectHistoryCard>
        </ProjectsSummaryCard> 
        
        </div>
    )
}