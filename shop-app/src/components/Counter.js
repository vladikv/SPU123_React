import { useState } from "react";
import { USERS } from "../users";

export default function Counter(){

    const [count, setCount] = useState(USERS.length);

    const plus =()=>{
        setCount(count+1);
    } 

    const minus =()=>{
        setCount(count-1);

    } 

    return(
        <>
            <h2>Counter: {count}</h2>
            <button onClick={plus} >+</button>
            <button onClick={minus} >-</button>
        </>

    );
}