import { Link, Outlet } from "react-router-dom"

export const Page1 = () => {
    return (
        <div>
            <h2>Welcome to Page 1</h2>
            <p>This is the main content area for Page 1. You can navigate to more detailed sections from here.</p>

            <h3>Available Details:</h3>
            <ul>
                <li>
                    <Link to="/page1/DetailA">Detail A</Link>
                    <p>Brief description of what Detail A contains.</p>
                </li>
                <li>
                    <Link to="/page1/DetailB">Detail B</Link>
                    <p>Brief description of what Detail B contains.</p>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};