import React from 'react'
import { useState } from 'react'

export default function ToDoList() {
const [listItem, setNewListItem] = useState('')
const [list, setNewList] = useState(null)

const handleChange = (event) =>{   
    event.preventDefault()
    setNewListItem(event.target.value)

}

const handleSubmit = (event) =>{
    
    if(list===null){
        setNewList([listItem])
    }else{
        listCopy.push(listItem)
        let listCopy = [...list]
        setNewList(listCopy)
        }
        
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={listItem} placeholder='Enter New Item...'></input>
            <input type='submit' value="submit"></input>
        </form>
    </div>
  )
}
