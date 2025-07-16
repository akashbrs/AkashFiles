import { useState } from "react"


const Counter =()=>{
    const [count,setCount]=useState(0)
    return(
        <div style={{marginBottom:'10px'}}>
            <h2>Counting value: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        
        </div>
    )
}
export default Counter