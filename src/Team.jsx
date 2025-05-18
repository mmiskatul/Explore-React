import React, { useState } from 'react'

function Team() {
    const [team,setTeam]=useState(11);
    const HandleAdd=()=>{
        const newTeam=team+1;
        setTeam(newTeam);
    }
    const handleRemove=()=>{
        const newTeam=team-1;
        setTeam(newTeam);
    }
    const teamStyle={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
  return (
    <div style={teamStyle} className='flex flex-col  '>
        <h1 className='text-3xl'>Team Claculation</h1>
      <h3 className='text-center'>Player : {team}</h3>
      <button className='border items-center justify-center p-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-200  transition-hover' onClick={HandleAdd}>Add</button>
      <button className='border items-center justify-center p-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-200  transition-hover' onClick={handleRemove}>remove</button>
    </div>
  )
}

export default Team
