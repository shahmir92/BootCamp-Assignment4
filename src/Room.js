import React from 'react';
import './room.css'


function Room(){

let [Counter , setCounter] = React.useState(0);
let [isLit , setLit] = React.useState(true);

function helpp(){
    setCounter(++Counter);}


  return (
    <div className={`room ${isLit? "day" : "night"}`}> 
        {isLit? "Good Morning" : "Good Night"}
        <br/>
            <button onClick = {() => setLit(!isLit)}>
                Click Me
            </button>
        
        <br/>
            {"Counter:            " + Counter}
        
        <br/>
            <button onClick = {()=> setCounter(--Counter)} >
                -   
            </button>
            
            <button onClick = {helpp}>
                +   
            </button>
            


    </div>
  );
  }
  export default Room;
