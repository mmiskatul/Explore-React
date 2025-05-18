import React from 'react'
import Counter from './Counter';
import Team from './Team';
import User from './User';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('Button Click');
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <Team/>

      <User/>
      <Friends/>
      {/* <h3>React Core Concept</h3>
      <Counter />
      <button className=' border-2 cursor-pointer rounded-xl bg-gray-500 text-white p-2' onClick={handleClick}> Click me</button> */}
    </div>
  )
}

export default App
