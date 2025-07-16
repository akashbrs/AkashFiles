import React,{ useState } from "react"

export default function ToggleText() {
    const[show,setShow]=useState(false)
    return(
        <div>
            <button onClick={()=>setShow(!show)}>
                {show?"Hide":"Show"}Description
            </button>
            {show && <p>Dhyanalinga and Adiyogi at isha yoga center Coimbatore </p>}
        </div>
    )
}