import { useContext, useState } from "react";
import { USERS } from "../users";
import { CounterContext } from "../contexts/counter.context";

export default function Counter(){

    const {count,increment,decrement} = useContext(CounterContext);

    return(
        <>
            <h2>Counter: {count}</h2>
            <button onClick={increment} >+</button>
            <button onClick={decrement} >-</button>
        </>

    );
}