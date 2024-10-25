import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffFetchData = () => {
    // const [post,setPost]=useState([])

    const [post,setPost]=useState({})

    const [id,setId]=useState('')

    const [idFromBtn,setIdFromBtn]=useState(1)



    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
        .then((res)=>{
            console.log(res)
            setPost(res.data)}
        )
        .catch(err=>
            console.log(err)
        )
    },[idFromBtn])


   const FetchData = ()=>{
    setIdFromBtn(id)
    }

  return (
    <div>
       

       <input type="text" value={id}  onChange={e=>setId(e.target.value)}/>
       <button type='button' onClick={FetchData} >SEARCH</button>

       <h3>{post.title }</h3>



      {/* <ul>{post.map(post=>(
       <div key={post.id}>
         <h1>{post.name}</h1>
         <h5>{post?.address?.city}</h5>
       </div>
      ))}</ul> */}
    </div>
  )
}

export default UseEffFetchData
