import { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../contexts/counter.context";

export default function Menu() {
    const {count} = useContext(CounterContext);
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="users">Users</Link>
            <Link to="products">Products</Link>
            <Link to="counter">Counter [{count}]</Link>
            <Link to="*">About</Link>
        </nav>
    );
}