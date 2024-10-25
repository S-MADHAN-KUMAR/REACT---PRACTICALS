import React, { useState } from 'react'

const HookArry = () => {

const [item,setItem] = useState([])

const addItems= ()=>{
    setItem(([...item,{
    id:item.length,
    values:Math.floor(Math.random()*10)+1
    }]))
}


  return (
    <div>
      
      <button onClick={addItems} >ADD ITEMS</button>

      <button onClick={()=>setItem(preState=>preState.slice(0,-1))} >REMOVE ITEMS</button>

      <ul>{item.map(item=>
        <li key={item.id}>{item.values}</li>
      )}</ul>
    </div>
  )
}

export default HookArry
