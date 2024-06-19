import React from 'react'


const Car =(props)=> {
    // console.log(props)
return<div>
 <h1>
    {props.color} - {props.price}
    </h1>
    {/* {props.children} */}
 </div>
 }

export default Car