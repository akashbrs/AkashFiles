import React, { useState } from "react";

function Text() {
    const [name, setName] = useState("");

    const printName = (event) => {
        event.preventDefault();
        document.write(`Your name is ${name}!`);
    };

    return (
        <form onSubmit={printName}>
            <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={()=>alert("Your response is recorded")}>Submit</button>
        </form>

    );
}

export default Text;
