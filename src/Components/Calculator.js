import React from 'react'
import { Button, Alert } from 'reactstrap'
import { useState } from 'react'

export default function Calculator() {
  let [functionLine, setFunctionLine] = useState(0)

  let [operator, setOperator] = useState('+')

  const handleNum = (e) =>{
    e.preventDefault()
    let requestedVal = Number(e.target.innerText)

    if(functionLine === 0){
      setFunctionLine(requestedVal)
    }
    
    if(operator === '+'){
      setFunctionLine(functionLine + requestedVal)
    }else if(operator === '-' ){
      setFunctionLine(functionLine - requestedVal)
    }else if(operator === 'X'){
      setFunctionLine(functionLine * requestedVal)
    }else if(operator === '/'){
      setFunctionLine(functionLine / requestedVal)
    } else{
      console.log('please enter operator')
    }
    // setFunctionLine(functionLine + requestedVal)
    // console.log(functionLine)
  }
  console.log(functionLine)
  const handleOp = (e) =>{
    let requestedOp = e.target.innerText
    setOperator(requestedOp)
    console.log(operator)
  }

  return (
    <div>
      <Alert>
        {functionLine}
      </Alert>
      <div>
       
        <Button className='calc-btn' onClick={handleNum}>1</Button>
        <Button className='calc-btn' onClick={handleNum}>2</Button>
        <Button className='calc-btn' onClick={handleNum}>3</Button>
        <Button className='calc-btn' onClick={handleOp}>X</Button><br/>
        <Button className='calc-btn' onClick={handleNum}>4</Button>
        <Button className='calc-btn' onClick={handleNum}>5</Button>
        <Button className='calc-btn' onClick={handleNum}>6</Button>
        <Button className='calc-btn' onClick={handleOp}>/</Button><br/>
        <Button className='calc-btn' onClick={handleNum}>7</Button>
        <Button className='calc-btn' onClick={handleNum}>8</Button>
        <Button className='calc-btn' onClick={handleNum}>9</Button>
        <Button className='calc-btn' onClick={handleOp}>-</Button><br/>
        <Button className='calc-btn' onClick={handleOp}>CLR</Button>
        <Button className='calc-btn-equ' onClick={handleOp}>===</Button>
        <Button className='calc-btn' onClick={handleOp}>+</Button>
      </div>
    </div>
  )
}
