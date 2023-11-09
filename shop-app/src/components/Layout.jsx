import Menu from "./Menu";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header>
                <div className="App">
                    <h1>Hello React</h1>
                    <Menu />
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
}