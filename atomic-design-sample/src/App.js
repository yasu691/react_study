import { Root } from './Root';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
