import { Link, Outlet } from "react-router-dom"

export const Root = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/Home">Home</Link><br /></li>
                        <li><Link to="/page1">Page1</Link><br /></li>
                        <li><Link to="/page2">Page2</Link><br /></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2024 My Website</p>
            </footer>
        </div>
    );
};