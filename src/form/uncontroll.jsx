import { useEffect, useRef, useState } from "react"

export function Uncontroll(){
let [user,setuser]=useState("")
let inputref= useRef()

console.log("rendring component")

console.log(inputref)

    return (
<>
<h1>diffrence between usref and usestate</h1>

<input type="text" name="name" onChange={(e)=>setuser(e.target.value)} />

<input type="text" onChange={(e)=>inputref.current = e.target.value}/>


</>

    )
}















// import { useState } from "react"

// export function Uncontroll(){
// let [user,setuser]=useState({name:"",email:"",password:""})

// function handlechange(e){
//     let {name,value}=e.target

//     setuser({...user, [name]:value})

// }

// console.log(user)
// console.log("OUTSIDE ")

//     return (
// <>
// <h1>Useref session</h1>

// <form >
// <input type="text" name="name" id="name" placeholder="enter value  " onChange={handlechange}/>
// <input type="email" name="email" id="email" placeholder="enter value "/>
// <input type="text" name="password" id="password" placeholder="enter value "/>

// <input type="submit" value="sumbit" />


// </form>


// </>

//     )
// }