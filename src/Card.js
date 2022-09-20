import React from 'react'
import './App.css'

const Card = (props) => {



 // console.log(props.time);
//console.log(text);
  return (
    <div className={`color ${props.title} ${props.bgColor}`} >
        <div className={`card ${props.title}`}>
          {props.title}
          {props.header_card}
          <React.Fragment><button onClick={()=>console.log('daily')}>daily</button></React.Fragment>
        </div>
        </div>

    
  )
}

export default Card

