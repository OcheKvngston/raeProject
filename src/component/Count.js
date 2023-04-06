import React from 'react'
import "./count.css"
import { useState } from 'react';
import Btn from './Btn';

const Count = (props) => {
    const [counter,countChanger] = useState(0)
    const Adder = ()=>{
        countChanger(counter + 1)
    }
    const Reducer = ()=>{
        countChanger(counter - 1)
    }

  return (
    <div className='container'>
        <Btn className='reducer'>
            <div onClick={Reducer}>-</div>
        </Btn>
        <div className='num_holder'>
            {counter}
        </div>
        <Btn className='adder'>
            <div onClick={Adder}>+</div>
        </Btn>
    </div>
  )
}

export default Count