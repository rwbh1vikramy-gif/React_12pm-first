import { useState } from "react";
import { Childfun } from "./childfun";

export function Parentsfun(){
let [falge,setflag]=useState(false) 
//it has data untill component mount, if component will be unmount 
let value=987;
let value2=98798;
    return (
<>
<h1>cvter</h1>

{falge==true && <Childfun  value={value} value2={value2}/>}

<button onClick={()=> setflag(!falge)}>callChild</button>

</>

    )
}