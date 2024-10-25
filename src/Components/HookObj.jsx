import React from 'react'
import { useState } from 'react'

const HookObj = () => {

  const [name,setName]=useState({first:'',last:''})

  return (
    <div>

     <input 
     type="text"
     value={name.first}
     onChange={e=>setName({...name,first:e.target.value})}
     />


    <input 
     type="text"
     value={name.last}
     onChange={e=>setName({...name,last:e.target.value})}
     />


      <h1>First Name : {name.first}</h1>
      <h1>Last Name : {name.last}</h1>


      <h2>{JSON.stringify(name)}</h2>
      
    </div>
  )
}

export default HookObj
