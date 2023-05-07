import React, { useState, useEffect , useRef } from 'react';
import {Button} from "reactstrap";

export const PomodoroTimer = ()=> {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  let interval = useRef();

  useEffect(() => { 
     let countdown = setInterval(()=>{
        if(isActive) {  
              if(hours === 0 && minutes === 0 && seconds===0){
              clearInterval(countdown);
              setIsActive(false);
            }else if(minutes === 0 && seconds===0){
              setHours(hours-1);
              setMinutes(59);
              setSeconds(59);
            }else if (seconds===0){
              setMinutes(minutes-1);
              setSeconds(59);
            }else {
              setSeconds(seconds-1);
            }}
      },1000)
    return ()=> {clearInterval(countdown)}
    } , [hours, minutes, seconds, isActive]);

  const handleHoursChange = (e) => {
    setHours(parseInt(e.target.value));
  };

  const handleMinutesChange = (e) => {
    setMinutes(parseInt(e.target.value));
  };

  const handleSecondsChange = (e) => {
    setSeconds(parseInt(e.target.value));
  };

  const handleStart = () => {
    setIsActive(!isActive)
  };

  const handleReset = () => {
    setIsActive(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleStop = () => {
    setIsActive(false)
  };

  return (
    <div>
      <div>
        <input type="number" placeholder="hours" value={hours} min="0" max="24" onChange={handleHoursChange} />
      </div>
      <div>
        <input type="number" placeholder="minutes" value={minutes} min="0" max="59" onChange={handleMinutesChange} />
      </div>
      <div>
        <input type="number" placeholder="seconds" value={seconds} min="0" max="59" onChange={handleSecondsChange} />
      </div>
      <div>
       {hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div>
        <Button onClick={handleStart}>{isActive? 'stop': 'start'}</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}
