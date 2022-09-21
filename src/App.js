import './App.css';
import jsonData from './data.json';
import React from 'react';
import Card, {CardHead} from './Card';
import './images/icon-exercise.svg';
import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'



function App() {

  
 
  let color;
  let hours;

  function changePeriod(timeframe){
   console.log(timeframe)
   hours = jsonData.map(function (obj) { return obj.timeframes.daily.current});
   console.log(hours)
   return hours;
  }


  const orderInfo = jsonData.map(({title}, index)=> {

    
    
   

    let key=uuidv4();
  
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
  
 

 return (   
  <Card key={key} id={index} title={title} hours={hours} bgColor={color} changePeriod={changePeriod}/>
  )}
  )




  // var header_card=<React.Fragment><button onClick={()=>console.log('daily')}>daily</button></React.Fragment>;
  
  
  return ( 
    
    <div className='container'>
       <CardHead key='0' title='item-1' bgColor='blue' time={['daily', 'weekly', 'monthly']} header_card={true} changePeriod={changePeriod} />
     {orderInfo}
      </div>
    
    
    )

}

export default App;
