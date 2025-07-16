import React from "react";

export default function BtnText() {
    const[text,setText]=useState("Click me")
    return(
        <div>
            <button onClick={()=>setText("U Clicked me")}>{text}</button>
        </div>
    )
}