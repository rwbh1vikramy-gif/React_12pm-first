import { useEffect, useState } from "react"

export function Useeffectfun (){
let [count,setcount]=useState(0)
let [arr,setarr]=useState([])

async function fetchdata(){
let data= await fetch("https://fakestoreapi.com/products");
let res =await  data.json()
setarr(res)
console.log(data)
console.log(res)
}

useEffect(()=>{
fetchdata()
},[])


    return (

<>
<h1>Use effect session</h1>
<h2>value:{count}</h2>

<button onClick={()=> setcount(count+1)}>increase count</button>


{arr.map((product,i)=> (

<div key={i}>
<p>{product.title}</p>
<img src={product.image} alt="" />
</div>


))}


</>

    )
}