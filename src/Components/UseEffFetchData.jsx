import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffFetchData = () => {
    const [post,setPost]=useState([])


    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res)
            setPost(res.data)}
        )
        .catch(err=>
            console.log(err)
        )
    },[])
  return (
    <div>
      <ul>{post.map(post=>(
       <div key={post.id}>
         <h1>{post.name}</h1>
         <h5>{post?.address?.city}</h5>
       </div>
      ))}</ul>
    </div>
  )
}

export default UseEffFetchData
