import React from 'react'
import { useState } from 'react'

export default function ToDoList() {
    const [listItem, setNewListItem] = useState('')
    const [list, setNewList] = useState([''])

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
        return (
            <li>{item}</li>
        )
    })



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
