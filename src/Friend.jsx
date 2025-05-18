import React from 'react'

function Friend({friend}) {
    const {name,email}=friend;
  return (
    <div className='border-2 rounded-2xl p-8 mt-8 border-gray-400'>
      <h4>Name :{name}</h4>
      <p>Email :{email}</p>
    </div>
  )
}

export default Friend
