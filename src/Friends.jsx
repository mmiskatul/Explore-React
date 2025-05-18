import React, { useEffect, useState } from 'react'
import Friend from './Friend';

function Friends() {
  const [friends,setFriends]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriends(data))
  },[])
  return (
    <div className='border-2 m-4 p-4 rounded-xl'> 
      <h3>Friends : {friends.length} </h3>
      {
        friends.map(fi=><Friend friend={fi}/>)
      }
    </div>
  )
}

export default Friends
