import React, { useState } from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    const handdelAdd=()=>{
        newCount=count+1;
        setCount(newCount);
    }
  return (
    <div className='items-center justify-center' > 
      <h3>Counter :{count}</h3>
      <button className='' onClick={handdelAdd}>Add</button>
    </div>
  )
}

export default Counter
