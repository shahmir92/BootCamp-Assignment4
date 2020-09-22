import React from 'react';
import './room.css'

function Room(){

let [Counter , setCounter] = React.useState(23);
let [isLit , setLit] = React.useState(true);

function increment(){
    setCounter(++Counter);}


  return (
    <div className={`room ${isLit? "day" : "night "}`}> 
        {isLit? "Good Morning" : "Good Night"}
        <br/>
            <button onClick = {() => {if (Counter === false) {setLit(true)} else{setLit(false)} }}>
                Night
            </button>

            <button onClick = {() => {if (Counter === true) {setLit(false)} else{setLit(true)} }}>
                Day
            </button>
        
        <br/>
            {"Room Temperature:" + Counter + "°C"}
        
        <br/>
            <button onClick = {()=> setCounter(--Counter)} >
                -   
            </button>
            
            <button onClick = {increment}>
                +   
            </button>
            


    </div>
  );
  }
  export default Room;
