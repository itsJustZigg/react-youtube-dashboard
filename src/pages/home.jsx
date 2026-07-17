import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, plugins} from "chart.js"
import { Timeline } from '@mui/lab';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

function ChartsContainer({children}){
    return(
        <div className="chartsContainer">{children}</div>
    )
}

function RevenueChartCard(){
    const options={
        responsive: true,
        maintainAspectRatio: false,
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
        maintainAspectRatio: false,
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

function StatCard({name, stat, statGrowth, children}){
    return(
        <div className="statcard">
        <div className="statcard-header">
            <h2>{name}</h2>{children}
        </div>
        <h1>{stat}</h1><p>{statGrowth}</p>
        </div>
    )
}

function ProjectsSummaryCard({children}){
    return(
        <div className="projectsSummary">{children}</div>
    )
}

function ProjectsTable({tableData}){
    
    const recentProjects = tableData.filter(project => project.id < 6)
    
    return(
        <div className="projectstable-container">
        <h2>Recent Projects</h2>
        <table>
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Members</th>
                    <th>Completion</th>
                </tr>
            </thead>
            <tbody>
                {recentProjects.map((project) => ( 
                    <tr key={project.id}>
                        <td>{project.projectName}</td>
                        <td>{project.members}</td>
                        <td><progress value={Number(project.completion.slice(0, project.completion.length - 1))} max={100}></progress>{project.completion}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

function ProjectHistoryCard({children}){
    return(
        <div className="projectHistoryCard">
            <h2 className="prHistoryHeading">Project History</h2>
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

export default function Home({tableData}){

    return(
        <div className="home">
        <StatBar>
            <StatCard name="Subscribers" stat="25,937" statGrowth="+235"><SubscriptionsOutlinedIcon/></StatCard>
            <StatCard name="Revenue" stat="$18,233" statGrowth="+$1,300"><PaidIcon/></StatCard>
            <StatCard name="Views" stat="130,000" statGrowth="+22,500"><PersonIcon/></StatCard>
            <StatCard name="Watch time (hours)" stat="30.5k" statGrowth="+2.5k"><WatchLaterOutlinedIcon/></StatCard>
        </StatBar>
        <ChartsContainer>
            <SubsChartCard />
            <RevenueChartCard />
        </ChartsContainer>
        <ProjectsSummaryCard>
            <ProjectsTable tableData={tableData}></ProjectsTable>
            <ProjectHistoryCard>
                <ProjectHistoryTimeline></ProjectHistoryTimeline>
            </ProjectHistoryCard>
        </ProjectsSummaryCard> 
        
        </div>
    )
}