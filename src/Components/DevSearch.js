import React from 'react'
import { useState } from 'react'
import { Button,
         ListGroup, 
         ListGroupItem,
         Spinner, 
         } from 'reactstrap'

export default function DevSearch() {
  const [searchParam, setSearchParam] = useState('')
  const [searchData, setSearchData] = useState([])
  const [activeLoading, setActiveLoading] = useState(false)
  const [requestedSorce, setRequestedSource] = useState('')
 


  // Function handles search input
  const handleSubmitSearch = (event) => {
    event.preventDefault()
   
  //clearning the screen of search results in preporation of the next search
    setSearchData([])
    setActiveLoading(true)
  //Attempting to display a loading animation while waiting for Fetch response

     
    //formats the search string to be approprate for a media query
    const searchString = searchParam.replace(/ /g, '+')

    //set's proper headers for a get request to the Rapid API
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
      .then(data => {
        setSearchData(data.results)
        setActiveLoading(false)
      })    
  }

  // the onChange event updates the text field the user types into
  const handleOnChange = (event) => {
    event.preventDefault()
    setSearchParam(event.target.value)
  }

  //handleSourceChange allows the user to change the site they want to search from
  const handleSourceChange = (event) => {

    const searchSite = event.target.innerText
    if (searchSite === "stackoverflow") {
      setRequestedSource("stackoverflow.com")
    } else if (searchSite === "MDN") {
      setRequestedSource("developer.mozilla.org")
    } else if (searchSite === "Jquery") {
      setRequestedSource("jquery.com")
    } else if (searchSite === "react.js Docs") {
      setRequestedSource("reactjs.org")
    }

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
      <h3>Dev-Search</h3>
      <Button className="spacer" onClick={handleSourceChange} color="info">stackoverflow</Button>
      <Button className="spacer" onClick={handleSourceChange} color="info">MDN</Button>
      <Button className="spacer" onClick={handleSourceChange} color="info">Jquery</Button>
      <Button className="spacer" onClick={handleSourceChange} color="info">React.js Docs</Button>

      <form className="form" onSubmit={handleSubmitSearch}>
        <input onChange={handleOnChange} type="text" placeholder='Please enter search criteria' value={searchParam} ></input>
        <br />
        <input type="submit" value="Search!"></input>
      </form>

      <div class="spinner" >
        {activeLoading ? <Spinner /> : '' }
       
      </div>

      <ListGroup>
        {searchResults}
      </ListGroup>

    </div>
  );
}
