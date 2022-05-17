import React from 'react'
import { Button, Alert } from 'reactstrap'
import { useState } from 'react'

export default function Calculator() {
  let [functionLine, setFunctionLine] = useState({
    sign: "",
    num: 0,
    res: 0,
  })

  const handleNum = (e) =>{
    e.preventDefault()
    console.log()
    
  }
  const handleOp = (e) =>{
    
  }


  return (
    <div>
      <Alert>
      
      </Alert>
      <div>
        <Button onClick={handleOp}>+</Button>
        <Button onClick={handleOp}>-</Button><br/>
        <Button onClick={handleNum}>1</Button>
        <Button onClick={handleNum}>2</Button>
        <Button onClick={handleNum}>3</Button><br/>
        <Button onClick={handleNum}>4</Button>
        <Button onClick={handleNum}>5</Button>
        <Button onClick={handleNum}>6</Button><br/>
        <Button onClick={handleNum}>7</Button>
        <Button onClick={handleNum}>8</Button>
        <Button onClick={handleNum}>9</Button>
      </div>
    </div>
  )
}
