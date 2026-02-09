import { useState } from "react"
import "../App.css"

export function Changebackground(){
let [theme, settheme]=useState("white")
let [per,setper]=useState(3213)
console.log(per)

    return (

<>
<button  onClick={()=>settheme((pre)=> pre=="white" ? "dark":"white")} >ChangeTheme</button>
<section style={{backgroundColor:theme=="white"?"white" : "black" , color:theme=="dark"?"white":"black"}}>
    {/* <h2>This is change background session </h2> */}

<div className="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellat quisquam? Dolorem atque, officia nostrum debitis accusamus repellat repudiandae? Recusandae enim minus, iste distinctio quas neque rerum est ea delectus!</div>
<div className="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellat quisquam? Dolorem atque, officia nostrum debitis accusamus repellat repudiandae? Recusandae enim minus, iste distinctio quas neque rerum est ea delectus!</div>
<div className="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellat quisquam? Dolorem atque, officia nostrum debitis accusamus repellat repudiandae? Recusandae enim minus, iste distinctio quas neque rerum est ea delectus!</div>


</section>


</>

    )
}