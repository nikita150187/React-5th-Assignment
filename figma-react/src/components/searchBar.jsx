import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import "./searchBar.css";


export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("")

  const fetchData = (value) => {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(json => {
      const Result = json.filter((user) => {
        return (
          value && 
          user && 
          user.name && 
          user.name.toLowerCase().includes(value))
      })
      setResults(Result);
      
    });
  };

  const handleChange =(value) => {
    setInput(value);
    fetchData(value);
  };

  return  <div className="input-wrapper">
      <FaSearch id="search-icon"/>      
       <input placeholder="Type to Search..." value={input} onChange={(e) => handleChange(e.target.value)}/>
       <button className='search-btn'>Search</button>
    </div>  
  
};







