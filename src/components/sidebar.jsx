function SidebarItem({title}){
    return(
        
        <li className="item">{title}</li>
    )
}

export default function Sidebar(){
    
    return(
        <>
        <div className="sidebar">
        <h1>YT Project Manager</h1>
        <ul>
            <SidebarItem title="Home"/>
            <SidebarItem title="Projects"/>
            <SidebarItem title="Calendar"/>
            <SidebarItem title="Help"/>
            <SidebarItem title="Settings"/>
            <SidebarItem title="Logout"/>
        </ul>
        </div>
        </>
    )
}