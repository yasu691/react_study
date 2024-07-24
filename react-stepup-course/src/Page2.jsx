import { Link, Outlet } from "react-router-dom";

export const Page2 = () => {
    return (
        <div>
            <h1>Page2のページです</h1>
            <Link to="/page2/100">URL Parameter</Link>
            <Outlet />
        </div>
    );
};