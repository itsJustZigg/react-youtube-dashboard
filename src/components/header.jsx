import SearchBar from "./searchbar";
import ThemeSelector from "./themeSelector";



export default function Header({handleOpenModal, tableData, pageHeader}){
    return (
        <div className="header">
            <h2>{pageHeader}</h2>
            <SearchBar handleOpenModal={handleOpenModal} tableData={tableData}/>
            <ThemeSelector />
        </div>
    )
}