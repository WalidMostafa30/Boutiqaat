import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import MenPage from "../pages/MenPage/MenPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MenPage />,
      },
      // {
      //   path: "men",
      //   element: <MenPage />,
      // },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
