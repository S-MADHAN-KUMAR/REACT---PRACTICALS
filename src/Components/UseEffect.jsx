import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`Document ${count} Times Clicked !`
    })
  return (
    <div>
      <button onClick={()=>setCount(preState=>preState+1)} >{count} TIme Clicked</button>
    </div>
  )
}

export default UseEffect
