import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Offcanvas, OffcanvasBody } from 'reactstrap'
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
                <Button color="primary" onClick={handleToggle}>|||</Button>
                <Offcanvas isOpen={isActive} direction='start'>
                    <OffcanvasBody onClick={handleToggle}>
                        <div className='test'>
                            <Link to=""><Button color="primary">Home</Button></Link><br />
                            <Link to='/search'><Button color="primary">Search</Button></Link><br />
                            <Link to='/todoList'><Button color="primary">ToDo List</Button></Link><br />
                            <Link to='/calculator'><Button color="primary">Calculator</Button></Link><br />
                        </div>
                    </OffcanvasBody>
                </Offcanvas>
            </nav>
        </div>
    )
}
