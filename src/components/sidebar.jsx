import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';

function SidebarItem({handleSidebarClick, title}){
    return(
        <li className="item">{title}</li>
    )
}

export default function Sidebar({currentPage, handleSidebarClick}){
    
    const [sidebarClassName, setSidebarClassName] = useState("sidebar-close")


    function handleSidebarClose(){
        if(sidebarClassName === "sidebar-open"){
            setSidebarClassName("sidebar-close")
        }
        else if(sidebarClassName === "sidebar-close"){
            setSidebarClassName("sidebar-open")
        }
    }

    

    return(
        <>
        <div className={sidebarClassName}>
            <div className='logo-container'>
               {sidebarClassName === "sidebar-open" && <h1>YT Project Manager</h1>}<MenuOutlinedIcon onClick={handleSidebarClose}/>
            </div>
        <ul>
            <div className={currentPage === "home" ? 'sidebar-item-container-selected':'sidebar-item-container'} onClick={() => handleSidebarClick("home")}>
                <HomeIcon sx={{margin: "15px 5px 15px 5px"}}/>{ sidebarClassName === "sidebar-open" && <SidebarItem title="Home"/> }
            </div>
            <div className={currentPage === "projects" ? 'sidebar-item-container-selected':'sidebar-item-container'} onClick={() => handleSidebarClick("projects")}>
                <WorkIcon sx={{margin: "15px 5px 15px 5px"}}/>{ sidebarClassName === "sidebar-open" && <SidebarItem handleSidebarClick={handleSidebarClick} title="Projects"/> }
            </div>
            <div className={currentPage === "calendar" ? 'sidebar-item-container-selected':'sidebar-item-container'} onClick={() => handleSidebarClick("calendar")}>
                <CalendarMonthIcon sx={{margin: "15px 5px 15px 5px"}}/>{ sidebarClassName === "sidebar-open" && <SidebarItem handleSidebarClick={handleSidebarClick} title="Calendar"/> }
            </div>
            <div className='sidebar-item-container'>
                <HelpCenterIcon sx={{margin: "15px 5px 15px 5px"}}/>{ sidebarClassName === "sidebar-open" && <SidebarItem handleSidebarClick={handleSidebarClick} title="Help"/> }
            </div>
            <div className='sidebar-item-container'>
                <SettingsIcon sx={{margin: "15px 5px 15px 5px"}}/>{ sidebarClassName === "sidebar-open" && <SidebarItem handleSidebarClick={handleSidebarClick} title="Settings"/> }
            </div>
            <div className='sidebar-item-container'>
                <LogoutIcon sx={{margin: "15px 5px 15px 5px"}}/>{ sidebarClassName === "sidebar-open" && <SidebarItem handleSidebarClick={handleSidebarClick} title="Logout"/> }
            </div>
        </ul>
        </div>
        </>
    )
}