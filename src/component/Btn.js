import React from 'react'
import "./count.css"

const Btn = (props) => {
    const holder = "prop " + props.className
  return (
    <div className={holder}>
        {props.children}
    </div>
  )
}

export default Btn