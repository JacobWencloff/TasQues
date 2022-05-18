import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { Table, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Alert  } from 'reactstrap'


export default function ToDoList() {
    const [listItem, setNewListItem] = useState('')
    const [projectList, setNewProjectList] = useState([])
    const [weeklyList, setNewWeeklyList] = useState([])
    const [dailyList, setNewDailyList] = useState([])
    const [ddOpen, setDDOpen] = useState(false)
    const [alertToggle, setAlertToggle] = useState(false)
    const [entryType, setEntryType] = useState(null)

    const handleChange = (event) => {
        event.preventDefault()
        setNewListItem(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (entryType === 'Projects') {
            let projectListCopy = [...projectList]
            projectListCopy.push(listItem)
            setNewProjectList(projectListCopy)
        } else if (entryType === 'Weekly Goals') {
            let weeklyListCopy = [...weeklyList]
            weeklyListCopy.push(listItem)
            setNewWeeklyList(weeklyListCopy)
        } else if (entryType === 'Daily Tasks') {
            let dailyListCopy = [...dailyList]
            dailyListCopy.push(listItem)
            setNewDailyList(dailyListCopy)
        }else if(entryType === null){
            toggleAlert()
        }


        setNewListItem('')

    }

    const handleEntryType = (e) => {
        e.preventDefault()
        let target = e.target.innerText
        if (target === 'Projects') {
            setEntryType('Projects')
            console.log('project selected')
        } else if (target === 'Weekly Goals') {
            setEntryType('Weekly Goals')
            console.log('weekly selected')
        } else if (target === 'Daily Tasks') {
            setEntryType('Daily Tasks')
            console.log('Daily selected')
        }
    }

    const mappedDailyList = dailyList.map((item, i) => {
        return (
            <tr key={item + i}>
                <td>
                    {item}
                </td>
            </tr>
        )
    })
    const mappedWeeklyList = weeklyList.map((item, i) => {
        return (
            <tr key={item + i}>
                <td>
                    {item}
                </td>
            </tr>
        )
    })
    const mappedProjectList = projectList.map((item, i) => {
        return (
            <tr key={item + i}>
                <td>
                    {item}
                </td>
            </tr>
        )
    })

    const handleToggle = () => {
        if (ddOpen) {
            setDDOpen(false)
        } else {
            setDDOpen(true)
        }
    }
    const toggleAlert = () =>{
        if(alertToggle){
            setAlertToggle(false)
        }else{
            setAlertToggle(true)
        }
    }
    return (
        <div>
            <div >
                <Alert dismissible color="warning" isOpen={alertToggle} toggle={toggleAlert} >Please select an entry type and try again!</Alert>
            </div>
            <form is onSubmit={handleSubmit}>
                <div className='drop-container'>
                    <Dropdown isOpen={ddOpen} toggle={handleToggle}>
                        <DropdownToggle caret>
                            Select Type
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleEntryType}>
                                Projects
                            </DropdownItem>
                            <DropdownItem onClick={handleEntryType}>
                                Weekly Goals
                            </DropdownItem>
                            <DropdownItem onClick={handleEntryType}>
                                Daily Tasks
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <input onChange={handleChange} type="text" value={listItem} placeholder='Enter New Item...'></input>
                <input type='submit' value="submit"></input>
            </form>
            <Table hover>
                <th>
                    Projects
                </th>
                <tbody>
                    {mappedProjectList}
                </tbody>
                <th>
                    Weekly Goals
                </th>
                <tbody>
                    {mappedWeeklyList}
                </tbody>
                <th>
                    Daily Tasks
                </th>
                <tbody>
                    {mappedDailyList}
                </tbody>
            </Table>

        </div>
    )
}
