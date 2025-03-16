import './searchBar.css'




export const searchBar = (elementoPadre) => {
    const searchInput =  document.createElement("input");

    elementoPadre.appendChild(searchInput);
    
    searchInput.placeholder = "Buscar";
    searchInput.classList.add("searchInput");

};








