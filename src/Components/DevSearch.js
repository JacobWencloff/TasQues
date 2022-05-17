import React from 'react'
import { useState } from 'react'
import { Button,
         ListGroup, 
         ListGroupItem, 
         } from 'reactstrap'

export default function DevSearch() {
  const [searchParam, setSearchParam] = useState('')
  const [searchData, setSearchData] = useState([])

  let requestedSorce = ""

  const handleSubmitSearch = (event) => {
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
      .then(data => setSearchData(data.results))
  }

  // the onChange event updates the text field the user types into

  const handleOnChange = (event) => {
    event.preventDefault()
    // console.log(event.target.value)
    setSearchParam(event.target.value)
  }



  //handleSourceChange allows the user to change the site they want to search from

  const handleSourceChange = (event) => {
    // console.log(event.target.innerText)
    const searchSite = event.target.innerText
    if (searchSite === "stackoverflow") {
      requestedSorce = "stackoverflow.com"
    } else if (searchSite === "MDN") {
      requestedSorce = "developer.mozilla.org"
    } else if (searchSite === "Jquery") {
      requestedSorce = "jquery.com"
    } else if (searchSite === "react.js Docs") {
      requestedSorce = "reactjs.org"
    }

    // console.log(requestedSorce)
  }

  const searchResults = searchData.map((item, i) => {
    
    return (
      
      <ListGroupItem action href={item.link} tag='a' target='_blank'>
          {item.title}
      </ListGroupItem>
      
    )
  })

  return (
    <div className="App">
      <Button className="spacer" onClick={handleSourceChange} color="info">stackoverflow</Button>
      <Button className="spacer" onClick={handleSourceChange} color="info">MDN</Button>
      <Button className="spacer" onClick={handleSourceChange} color="info">Jquery</Button>
      <Button className="spacer" onClick={handleSourceChange} color="info">React.js Docs</Button>
      <form className="form" onSubmit={handleSubmitSearch}>
        <input onChange={handleOnChange} type="text" placeholder='Please enter search criteria' value={searchParam} ></input>
        <input type="submit" value="Search!"></input>
      </form>

      <ListGroup>
        {searchResults}
      </ListGroup>

 
      
    </div>
  );
}
