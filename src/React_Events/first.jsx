import { useState } from "react"
import { Conditional } from "./conditional"

export function Firstfun (){

let [userdata,setdata]=useState({name:"", email:"", password:""})
let [flag,setflag]=useState(false)

function handlechange(e){
    let {name,value}=e.target
setdata({...userdata, [name]:value})

}

function handlesubmit(e){

    e.preventDefault()
    console.log(userdata)

    setflag(!flag)

}

return (

<>

<div>

<form onSubmit={handlesubmit} style={{display:"flex", flexDirection:"column", gap:"10px", width:"40%"}}>

<input type="text" name="name" id="name"  placeholder="enter your name"  onChange={handlechange}/>
<input type="email" name="email" id="email" placeholder="enter your email" onChange={handlechange} />
<input type="password" name="password" id="password" placeholder="enter your password" onChange={handlechange} />

<input type="submit" value="submit" />

</form>

{flag && <Conditional/>}

</div>




</>

)


}