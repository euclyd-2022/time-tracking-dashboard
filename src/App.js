import './App.css';
import jsonData from './data.json';
import React, {useState} from 'react';
import Card from './Card';
import './images/icon-exercise.svg';
import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


function App() {

  const [getTime, setTime] = useState(jsonData);
  
  var orderInfo = getTime.map( function(order) {

  
  

    
    let color;
    let key=uuidv4();

    
  
 
    switch(order.title){
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
    }
    
    return (
      
    <Card key={key} title={order.title} time={order.timeframes.daily.current} bgColor={color}/>);
  });



  var header_card=<React.Fragment><button onClick={()=>console.log('daily')}>daily</button></React.Fragment>;
  
  
  return ( 
    
    <div className='container'>
      <Card title='item-1' bgColor='blue' header_card={header_card} />
      {orderInfo}
      </div>
    
    
    )

}

export default App;
