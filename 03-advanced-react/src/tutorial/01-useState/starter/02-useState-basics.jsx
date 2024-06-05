import { useState } from "react";

const UseStateBasics = () => {
    const [count, setCount]= useState(0);
    return(
        <div className="container">
            {/* <h2>{count}</h2>
            <button onClick={setCount(count+ 1)} className="btn">Click Me Daddyy!!
            </button> */}

            <h1>{count}</h1>
            <button className="btn" onClick={() => setCount(count+ 1)}>Click Me</button>
        </div>
    )
};

export default UseStateBasics;
