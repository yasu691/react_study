import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Root } from "./Root";
import { Page1Index } from "./Page1Index";
import ErrorPage from "./ErrorPage";

export default function App() {
  console.log('App');
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'Home', element: <Home />},
        {
          path: 'page1',
          element: <Page1 />,
          children: [
            { path: 'detailA', element: <Page1DetailA />},
            { path: ':detailB', element: <Page1DetailB />},
          ]
        },
        { path: "page2", element: <Page2 /> },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}