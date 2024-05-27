import React, { useState } from 'react'
import './style.css';

const UseState = () => {
  const [myData , setMyData] = useState(0);
  // console.log(myData);
  return (
    <>
    <div className='center_div'>
        <p>{myData}</p>
        <div className='button2' onClick={() => setMyData(myData+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className='button2' onClick={() => myData > 0 ? setMyData(myData-1) : setMyData(0)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
    </div>
    </>
  )
}

export default UseState;