import { useState } from "react"
import "../index.css"
let time=0
export function FirstRevision(){
let [time1, settime]=useState(0)

function starttimer(){

    setInterval(()=>{
// settime(time+1)
time = time+1
settime(time)
console.log(time)
    },1000)

}



    return (

        <>
        <h1>time watch</h1>
        <section className="container1">
            <h1>Time:{time}</h1>
<div>
<button onClick={()=>starttimer()}>start</button>
<button>stop</button>
<button>reset</button>
</div>

        </section>



        </>
    )
}


