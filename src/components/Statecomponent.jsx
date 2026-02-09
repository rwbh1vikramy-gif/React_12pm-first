import { useState } from "react"

export function Statecomponent(){
let [id,setid]= useState(0)

console.log("redering components")
function handlechange(){
   setid(id+1)
}


return (
<>
<h1>This is state session</h1>
<button onClick={()=>handlechange()}>click</button>

</>

)

}