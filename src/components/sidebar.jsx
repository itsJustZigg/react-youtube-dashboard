function SidebarItem({handleSidebarClick, title}){
    return(
        
        <li onClick={() => handleSidebarClick(title.toLowerCase())} className="item">{title}</li>
    )
}

export default function Sidebar({handleSidebarClick}){
    
    return(
        <>
        <div className="sidebar">
        <h1>YT Project Manager</h1>
        <ul>
            <SidebarItem handleSidebarClick={handleSidebarClick} title="Home"/>
            <SidebarItem handleSidebarClick={handleSidebarClick} title="Projects"/>
            <SidebarItem handleSidebarClick={handleSidebarClick} title="Calendar"/>
            <SidebarItem handleSidebarClick={handleSidebarClick} title="Help"/>
            <SidebarItem handleSidebarClick={handleSidebarClick} title="Settings"/>
            <SidebarItem handleSidebarClick={handleSidebarClick} title="Logout"/>
        </ul>
        </div>
        </>
    )
}