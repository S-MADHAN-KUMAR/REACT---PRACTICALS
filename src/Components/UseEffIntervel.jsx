import React, { useEffect, useState } from 'react'

const UseEffIntervel = () => {
   
    const [count,setCount] = useState(0)

    const Tick=()=>{
        setCount(preState=>preState+1)

    }


    useEffect(()=>{
        const Intervel = setInterval(Tick,1000)
        return()=>{
            clearInterval(Intervel)
        }
    },[])



  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default UseEffIntervel
