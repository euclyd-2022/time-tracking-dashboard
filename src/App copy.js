import './App.css';
import jsonData from './data.json';
import React, { useState } from 'react';
import Card, {CardHead} from './Card';
import './images/icon-exercise.svg';
import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


// function changePeriod(timeframe){


//   if (timeframe==='monthly'){
//    current_hours = jsonData.map(function (obj) { return obj.timeframes.monthly.current});
//   } 
//   else if (timeframe==='weekly'){
//    current_hours = jsonData.map(function (obj) { return obj.timeframes.weekly.current});
  
//   } else {
//    current_hours = jsonData.map(function (obj) { return obj.timeframes.daily.current});
  
//   }
//   console.log(current_hours + previous_hours)
//   return current_hours;
//  }



function App(props) {

  // console.log(jsonData); // full array

  // const [activity] = jsonData.map((activity)=>console.log(activity.title)); //all titles
  // const [randomname] = jsonData
  // const {title, timeframes: {daily: {current: daily_current, previous: daily_previous}, monthly: {current: monthly_current, previous: monthly_previous}, weekly: {current: weekly_current, previous: weekly_previous}}} = randomname;
  // console.log(title +' '+daily_current +' '+ weekly_current +' '+ monthly_current) // = Work 5 32 103
  
  
  

  const new_activity= jsonData.map(function m(new_activity, index) {
  let key=uuidv4(); 
  const {title, timeframes: {daily: {current: daily_current, previous: daily_previous}, monthly: {current: monthly_current, previous: monthly_previous}, weekly: {current: weekly_current, previous: weekly_previous}}} = new_activity
  //console.log(title,daily_current);
  console.log(props.getTimes)
  let color;
    switch(title){
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
    color=''
  }

  if (props.getTimes==='monthly'){

    console.log(props.getTimes)
    var current = {monthly_current}
   }

  return (<Card key={key} id={index} title={title} current={current} previous={daily_previous}  bgColor={color}/>
  ) 
   
})

return (   
  <div className='container'>
   <CardHead key='0' title='item-1' bgColor='blue' time={['daily', 'weekly', 'monthly']} header_card={true} getTimes={props.getTimes} /> 
    {new_activity}
    {/* <button onClick={()=>changePeriod('monthly')}>monthly</button> */}
    </div>
   

)
 
//   const period= jsonData.map(({timeframes})=>timeframes)
//   const [{daily}, {monthly}, {weekly}] = period;
//   var current_hours = daily.current;
//   var previous_hours  = daily.previous;
//   const [times, setTimes] = useState([current_hours,previous_hours])

//   console.log('c' + daily.current + ' p'  +daily.previous + ' ' + times)
  

//   function changePeriod(timeframe){
//     console.log(timeframe)
//      if (timeframe==='monthly'){
//       console.log(monthly.current + monthly.previous)
//       setTimes([monthly.current,monthly.previous])
      
//    }
//   }

 
  

//   const orderInfo = jsonData.map(({title,timeframes}, index)=> {
//   //const {daily, monthly, weekly} = timeframes;
//   let key=uuidv4();
//   let color;
//     switch(title){
//     case 'Work':
//     color='orange';
//     break;
//     case 'Play':
//     color='soft-blue';
//     break;
//     case 'Study':
//     color='light-red';
//     break;
//     case 'Exercise':
//     color='lime-green';
//     break;
//     case 'Social':
//     color='violet';
//     break;
//     case 'Self Care':
//     color='soft-orange';
//     break;
//     default:
//     color=''
//   }
  
//  return (   
//   <Card key={key} id={index} title={title} current={times[0]} previous={times[1]}  bgColor={color}/>
//   )}
//   )

//   // var header_card=<React.Fragment><button onClick={()=>console.log('daily')}>daily</button></React.Fragment>;

//   return ( 
    
//     <div className='container'>
//        <CardHead key='0' title='item-1' bgColor='blue' time={['daily', 'weekly', 'monthly']} header_card={true} changePeriod={() => this.changePeriod('daily')} />
//      {orderInfo}
//      <button onClick={()=>changePeriod('monthly')}>monthly</button>
//       </div>
    
    
//     )

}

export default App;
