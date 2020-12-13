
import './App.css';
import React , {useState} from "react" ;
import { Message } from "./Message.js";

function App() {
  let[count,setCount] = useState(1);
  let[ismorning, setMorning] = useState(true);

  return (
    <div className= {` box ${ismorning ? 'dayLight' : ' '}`}>
      <h3> DAY TIME ={ismorning ? 'Moring' : 'Night'} </h3>
      <h3>1. Showing value {count} </h3> 
      <hr/>
      <button onClick={()=> setCount(count+1)}>UPDATE COUNTER</button> 
      <hr/>
      <Message counter = {count}/>
      <hr/>
      <button onClick= {()=> setMorning(!ismorning)} >CHICK TO GO TO NIGHT MODE</button>
    </div>
  );
}

export default App;
 
