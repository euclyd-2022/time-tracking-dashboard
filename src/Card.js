import React from 'react';
import './App.css'
import jsonData from './data.json';

const Card = ({id, data, time}) => {

  let color = 'White';
    switch(data.title){
    case 'Work':
    color='orange';
    break;
    case 'Play':
    color='soft-blue';
    break;
    case 'Study':
    color='light-red';
    break;
    case 'Exercise':
    color='lime-green';
    break;
    case 'Social':
    color='violet';
    break;
    case 'Self Care':
    color='soft-orange';
    break;
    default:
    break;
  }
  

  return (
    <div className={`color ${id} ${color}`} >
        <div className={`card ${id} dark-blue`}>
        <div className="title">{data.title}</div>  
          <div className="hours-large">{data.timeframes[`${time}`].current} Hours</div>
          <div className="previous">{data.timeframes[`${time}`].previous} last time</div>
      
        </div>
        
        </div>

    
  )
}

const CardHead = ({title, bgColor, period, changePeriod}) => {
 
  return (
    
        <div className={`card ${title} dark-blue`}>
          <div className={`color ${title} ${bgColor}`} >   
            </div>
          
            <ul>
              <li>
                <button onClick={()=>changePeriod('daily')}>{period[0]}</button>
                </li>
                <li>
                  <button onClick={()=>changePeriod('weekly')}>{period[1]}</button>
                  </li>
                  <li>
                    <button onClick={()=>changePeriod('monthly')}>{period[2]}</button>
                    </li>
                    </ul>
                    
            
         </div>

    
  )
}

export default Card
export {CardHead}

