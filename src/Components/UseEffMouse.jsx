import React, { useEffect, useState } from 'react'

const UseEffMouse = () => {
   
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)


    const LogMoueMove=e=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }


    useEffect(()=>{
        console.log('Logging Mouse Move')
        window.addEventListener('mousemove',LogMoueMove)



        return()=>{
            console.log('Component Unmounted ....')
            window.removeEventListener('mousemove',LogMoueMove)
        }

    },[])

  return (
    <div>
      <h1>X - {x} Y - {y}</h1>
    </div>
  )
}

export default UseEffMouse
