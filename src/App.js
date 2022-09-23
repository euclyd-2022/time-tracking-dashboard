import './App.css';
import jsonData from './data.json';
import React, { useState } from 'react';
import Card, {CardHead} from './Card';
import './images/icon-exercise.svg';
//import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


function App() {

const [timeF, setTimeframe] = useState(['daily','Yesterday']); 

function changePeriod(timeframe) {
  
  if (timeframe==='monthly'){
    setTimeframe(['monthly','Last Month'])
  }
  else if  (timeframe==='weekly'){
    setTimeframe(['weekly','Last Week'])
  }
  else {
    setTimeframe(['daily','Yesterday'])
  }
  
}


  
  //let key = uuidv4()
  


return (   
  
  <div className='container'>
   <CardHead key='100' title='item-1' bgColor='blue' name='Jeremy Robson' period={['Daily', 'Weekly', 'Monthly']} changePeriod={changePeriod} /> 
   {jsonData.map((item, index)=>(<Card key={index} id={index} data={item} time={timeF} />))}
    </div>
   
)
  }

export default App;
