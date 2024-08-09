import { Root } from './Root';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './ErrorPage';
import Top from './components/pages/Top';
import Users from './components/pages/Users';
import { UserProvider } from './providers/UserProvider';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Top />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/users',
      element: <Users />
    },
    {
      path: '/admin',
      element: <Root />
    },
  ])

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}

export default App;
