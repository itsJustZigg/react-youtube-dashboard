export default function SearchBar(){
    return (
        <div className="searchbar">
        <input 
        //onChange={}have the projects titles show up under the search bar
        //as the search gets closer or 'no results found' if nothing turned up
        type="text" placeholder="Search for a project..."></input>
        </div>
    )
}