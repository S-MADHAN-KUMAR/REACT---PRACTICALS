import React, { useEffect, useState } from 'react'
import UseEffMouse from './UseEffMouse'

const UseEffUnmound = () => {
    const [display,setDisplay]= useState(true)


    useEffect(()=>{
        console.log('')
    })

  return (
    <div>
      <button onClick={()=>setDisplay(!display)} >Toggle Mouse Move !!!</button>
      {display && <UseEffMouse/>}
    </div>
  )
}

export default UseEffUnmound
