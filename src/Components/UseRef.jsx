import React, { useEffect, useRef } from 'react'

const UseRef = () => {
   
    const InputRef = useRef(null)

    useEffect(()=>{
        InputRef.current.focus()
    },[])
  return (
    <div>
      <input type="text" ref={InputRef} />
    </div>
  )
}

export default UseRef
