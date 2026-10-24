export function PostForm({filterText,onFilterChange}){
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
