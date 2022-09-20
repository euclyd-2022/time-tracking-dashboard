import React from 'react'
import './App.css'

const Card = (props) => {

  return (
    <div className={`color ${props.title} ${props.bgColor}`} >
        <div className={`card ${props.title} dark-blue`}>
          {props.title} 
          {props.hours} 
          {<React.Fragment>
            <ul>
              <li>
                <button onClick={()=>props.changePeriod('daily')}>daily</button>
                </li>
                <li>
                  <button onClick={()=>props.changePeriod('weekly')}>weekly</button>
                  </li>
                  <li>
                    <button onClick={()=>props.changePeriod('monthly')}>monthly</button>
                    </li>
                    </ul>
                    </React.Fragment>}
        </div>
        
        </div>

    
  )
}

const CardHead = (props) => {

  return (
    
        <div className={`card ${props.title} dark-blue`}>
          <div className={`color ${props.title} ${props.bgColor}`} >   
            </div>
          {<React.Fragment>
            <ul>
              <li>
                <button onClick={()=>props.changePeriod('daily')}>{props.time[0]}</button>
                </li>
                <li>
                  <button onClick={()=>props.changePeriod('weekly')}>{props.time[1]}</button>
                  </li>
                  <li>
                    <button onClick={()=>props.changePeriod('monthly')}>{props.time[2]}</button>
                    </li>
                    </ul>
                    </React.Fragment>}
            
         </div>

    
  )
}

export default Card
export {CardHead}

