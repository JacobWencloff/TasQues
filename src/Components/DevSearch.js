import React from 'react'
import { useState } from 'react'

export default function DevSearch() {
    const [searchParam, setSearchParam] = useState('')

    let requestedSorce = ""

    const handleSubmitSearch = (event) =>{
      event.preventDefault()
    //   console.log(event.target)
      // console.log(requestedSorce)
      const searchString = searchParam.replace(/ /g, '+')
      // console.log(searchString)
  
      const options = {
        method: 'GET',
        headers: {
          'X-User-Agent': 'desktop',
          'X-Proxy-Location': 'US',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
          'X-RapidAPI-Key': '98e614fd3bmshfab1707a4a7c11bp114e6fjsna0fde4fa07be'
        }
      };
      
      fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${searchString}&num=100&lr=lang_en&hl=en&cr=US&as_sitesearch=${requestedSorce}/
  
      `, options)
        .then(response => response.json())
        .then(response => console.log(response))
    }
  
    const handleOnChange = (event) =>{
      event.preventDefault()
      // console.log(event.target.value)
      setSearchParam(event.target.value)
    }
    const handleSourceChange = (event) =>{
        // console.log(event.target.innerText)
        const searchSite = event.target.innerText
        if(searchSite === "stackoverflow"){
            requestedSorce = "stackoverflow.com"
        }else if(searchSite === "MDN"){
            requestedSorce = "developer.mozilla.org"
        }else if(searchSite === "Jquery"){
            requestedSorce = "jquery.com"
        }else if(searchSite === "react.js Docs"){
            requestedSorce = "reactjs.org"
        }
        // console.log(requestedSorce)
    }
    return (
      <div className="App">
        <form onSubmit={handleSubmitSearch}>
          <input onChange={handleOnChange} type="text" placeholder='Please enter search criteria' value={searchParam} ></input>
        </form>
        <button onClick={handleSourceChange}>stackoverflow</button>
        <button onClick={handleSourceChange}>MDN</button>
        <button onClick={handleSourceChange}>Jquery</button>
        <button onClick={handleSourceChange}>React.js Docs</button>
      </div>
    );
}
