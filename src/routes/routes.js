import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddNews from "../pages/dashboard/AddNews/AddNews";
import NewsList from "../pages/dashboard/NewsList/NewsList";
import UpdateNews from "../pages/dashboard/UpdateNews/UpdateNews";
import About from "../pages/main/About/About";
import History from "../pages/main/History/History";
import Home from "../pages/main/Services/Services";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "history",
                element: <History />,
            },
            // {
            //     path: "cart",
            //     element: <Cart />,
            // },
        ],
    },

    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <NewsList />,
            },
            {
                path: "add-news",
                element: <AddNews />,
            },
            {
                path: "update-news/:id",
                element: <UpdateNews />,
            },
        ],
    },
]);

export default routes;
