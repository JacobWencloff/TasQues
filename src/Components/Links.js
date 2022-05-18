import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'reactstrap'
import { useState } from 'react'
export default function Links() {
    const [isActive, setIsActive] = useState(false)
    const handleToggle = (e) => {
        e.preventDefault()
        if (isActive === false) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    return (
        <div>
            <nav className='nav-main'>
                <Dropdown isOpen={isActive} direction='right' toggle={handleToggle}>
                    <DropdownToggle caret>
                        Navigation
                    </DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem>
                            <Link to=""><Button color="primary">Home</Button></Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to='/search'><Button color="primary">Search</Button></Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to='/todoList'><Button color="primary">ToDo List</Button></Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to='/calculator'><Button color="primary">Calculator</Button></Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </nav>
        </div>
    )
}
