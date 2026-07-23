import { TextField } from "@mui/material"
import { Autocomplete } from "@mui/material"
import { useState } from "react"

export default function SearchBar({handleOpenModal, tableData}){
    
    const [searchValue, setSearchValue] = useState('')
    
    function findProjectId(){
        const foundProject = tableData.find((project) => searchValue === project.projectName)

        if(foundProject){
            handleOpenModal(foundProject.id)
        }
    }

    return (
        <div className="searchbar">
        <Autocomplete 
        id="searchbar-autocomplete"
        onChange={(event, newSearch) => setSearchValue(newSearch)}
        onKeyDown={(e) => {
            if(e.key === 'Enter'){
                e.defaultMuiPrevented = true
                findProjectId()
            }
        }}
        freeSolo
        options={tableData.map((option) => option.projectName)}
        renderInput={(params) => <TextField  {...params} placeholder="Search for a project..."
            sx={{"& .MuiOutlinedInput-root": {
                borderRadius: "12px", 
                color: "rgb(226, 232, 240)", 
                height: "26px",
            "& fieldset": {
                borderColor: "rgb(46, 51, 71)", 
            },
            "&:hover fieldset": {
                borderColor: "rgb(46, 51, 71)",
            },

            "&.Mui-focused fieldset": {
                borderColor: "rgb(25, 118, 210)",
                borderWidth: "1px",
            },
            
        },
            "& .MuiAutocomplete-clearIndicator": {
                color: "rgb(226, 232, 240)",
            },
            "& .MuiOutlinedInput-input": {
                padding: "0 8px",
            },
        }}  
        />}
        />
        {/* <input 
        //onChange={}have the projects titles show up under the search bar
        //as the search gets closer or 'no results found' if nothing turned up
        type="text" placeholder="Search for a project..."></input> */}
        </div>
    )
}