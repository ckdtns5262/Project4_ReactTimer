import React from 'react'
import './My.css'

function MyTime() {
  return (  
    <div className='myt2'>
    {new Date().toLocaleTimeString()}
    </div>
  );
}

export default MyTime;
