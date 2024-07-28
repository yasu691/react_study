import { Link, Outlet, useNavigate } from "react-router-dom"

export const Page1 = () => {
    const arr = [...Array(100).keys()];
    console.log(arr);

    const navigate = useNavigate();

    const onClickDetailA = () => navigate('/page1/DetailA');

    return (
        <div>
            <h2>Welcome to Page 1</h2>
            <p>This is the main content area for Page 1. You can navigate to more detailed sections from here.</p>

            <h3>Available Details:</h3>
            <ul>
                <li>
                    <Link to="/page1/DetailA" state={{ arr }}>Detail A</Link>
                    <p>Brief description of what Detail A contains.</p>
                </li>
            </ul>
            <button onClick={onClickDetailA}>DetailA</button>
            <Outlet />
        </div>
    );
};