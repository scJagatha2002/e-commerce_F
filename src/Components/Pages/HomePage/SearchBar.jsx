/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/


import React, {useState} from 'react';


export default function Example() {
    
    const [input,SetInput] = useState("");
    const [results,SetResult] = useState([]);
    console.log(input);
    
    

    const accessToken = localStorage.getItem("jwt"); 
    const fetchData = (value) => {
        fetch('http://localhost:5454/api/product/Allproduct',{
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        })
          .then((response) =>
            response.json().then((json) => {
              console.log("res",json)
              const result = json?.filter((user) => {
                return (
                  value&&
                  user&&
                  user.title &&
                  user.title.toLowerCase().includes(value.toLowerCase())
                );
              });
              SetResult(result);
              console.log("results",result);
              
            })
          )
          
      };

    const handleChange = (value) => {
        SetInput(value);
        fetchData(value);
    }
    return (
        
        
        <div class="avatar-container ">
        <div class="avatar cursor-pointer">
        <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 }"
            placeholder="Search"
            
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div className="options w-56 cm:w-96">
        {results.map((result) => (            
            <a href={`http://localhost:3000/productdetails/${result.id}`}>{result.title}</a>)
            )}
        </div>
        
      </div>

    )
  }
  