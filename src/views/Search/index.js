
// 3) primero mostrar solo con el puro texto de "Buscador de personal" añadido, después proceder a meter inputs

// añadir lógica js y css classnames hasta después de maquetar


import { useState } from "react";
import SearchBox from "./components/SearchBox";

import data from "../../data/users.json";

import "./style.css"
import SearchResults from "./components/SearchResults";

export default function Search(){
    const [isAtTop, setIsAtTop] = useState(false);
    const [results, setResults] = useState([]);

    const handleCloseSearch = () => {
        setIsAtTop(false);
        setResults([]);
    };

    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if(data?.length){
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = data.filter((value) => (
                    value.name.toLowerCase().includes(searchTextMinus) || 
                    value.phone.toLowerCase().includes(searchTextMinus) || 
                    value.email.toLowerCase().includes(searchTextMinus) || 
                    value.username.toLowerCase().includes(searchTextMinus)
                )
            );
            setResults(filteredData);
        }
    };
  
    console.log(results);

    return(
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} isSearching={isAtTop} />
            <SearchResults results = {results} isSearching={isAtTop}/>
        </div>
    );
}


// 4) después de construir este archivo, crear archivo "SearchBox.js"