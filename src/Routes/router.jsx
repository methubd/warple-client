import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AboutPage from "../Pages/AboutPage/AboutPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <AboutPage></AboutPage>
        }
      ]
    },
]);

export default router;