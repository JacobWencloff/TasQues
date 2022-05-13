import React from 'react'
import { useState } from 'react'

export default function DevSearch() {
    const [searchParam, setSearchParam] = useState('')

    const handleSubmitSearch = (event) =>{
      event.preventDefault()
      console.log(event.target)
      
      const searchString = searchParam.replace(/ /g, '+')
      console.log(searchString)
  
      const options = {
        method: 'GET',
        headers: {
          'X-User-Agent': 'desktop',
          'X-Proxy-Location': 'US',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
          'X-RapidAPI-Key': '98e614fd3bmshfab1707a4a7c11bp114e6fjsna0fde4fa07be'
        }
      };
      
      fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${searchString}&num=100&lr=lang_en&hl=en&cr=US&as_q=stackoverflow.com/
  
      `, options)
        .then(response => response.json())
        .then(response => console.log(response))
    }
  
    const handleOnChange = (event) =>{
      event.preventDefault()
      console.log(event.target.value)
      setSearchParam(event.target.value)
    }
  
    return (
      <div className="App">
        <form onSubmit={handleSubmitSearch}>
          <input onChange={handleOnChange} type="text" value={searchParam}></input>
        </form>
      </div>
    );
}
