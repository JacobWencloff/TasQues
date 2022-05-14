import React from 'react'
import { useState } from 'react'

export default function ToDoList() {
    const [listItem, setNewListItem] = useState('')
    const [list, setNewList] = useState(['Please Enter More Content'])

    const handleChange = (event) => {
        event.preventDefault()
        setNewListItem(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
            let listCopy = [...list]
            listCopy.push(listItem)
            setNewList(listCopy)
            setNewListItem('')
        
    }
    
    const mappedList = list.map((item, i) => {
        console.log(item)
        return (
            <li>{item}</li>
            )
        })
        
        // console.log(mappedList)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={listItem} placeholder='Enter New Item...'></input>
                <input type='submit' value="submit"></input>
            </form>
            <ul>
                {mappedList}
            </ul>
        </div>
    )
}
