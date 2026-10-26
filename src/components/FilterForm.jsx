export function PostForm({filterText,onFilterChange}){ //Handling the user input using a callback function(onFilterChange)
    return(
        <form>
            <input
               type="text"
               value={filterText}
               onChange={ (p)=> onFilterChange(p.target.value)}
               />
        </form>
    )
}
