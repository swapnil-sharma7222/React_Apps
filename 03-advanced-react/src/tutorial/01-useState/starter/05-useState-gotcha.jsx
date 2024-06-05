import { useState } from "react";
const UseStateGotcha = () => {
    const [count, setCount]= useState(0);
    const increase= ()=> {
        setCount((currentValue)=> {
            console.log(currentValue+ 1);
            return currentValue+ 1;
        })
    }
    return(
        <>
            <h2>{count}</h2>
            <button className="btn" onClick={increase}>Click Me Daddyy!!</button>
        </>
    )
};

export default UseStateGotcha;
