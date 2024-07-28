import { useRouteError, useNavigate } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p><i>{error.statusText || error.message}</i></p>
            <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
    );
}

export default ErrorPage;