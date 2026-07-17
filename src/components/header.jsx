import SearchBar from "./searchbar";
import ThemeSelector from "./themeSelector";



export default function Header({pageHeader}){
    return (
        <div className="header">
            <h2>{pageHeader}</h2>
            <SearchBar />
            <ThemeSelector />
        </div>
    )
}