import React from 'react';
import './App.css'
import jsonData from './data.json';
import jeremy from'./images/image-jeremy.png'

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
    <div className={`color ${data.title} ${color}`} >
        <div className={`card ${data.title} dark-blue`}>
        <div className='text'><div className="title">{data.title}<span className='three-dots'></span></div>  
          <div className="hours-large">{data.timeframes[`${time[0]}`].current} hrs</div>
          <div className="previous pale-blue">{time[1]} - {data.timeframes[`${time[0]}`].previous}hrs</div>
          </div>
      
        </div>
        
        </div>

    
  )
}

const CardHead = ({title, name, bgColor, period, changePeriod}) => {
 
  return (
    
        <div className={`card ${title} dark-blue`}>
           
          <div className={`color ${title} ${bgColor}`} >
            <div ><img className='avatar' src={jeremy} alt='name'></img><div className='report-name'><span className='report-for'>Report for</span><br />{name}</div> </div>
            
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

