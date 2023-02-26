import { createBrowserRouter } from "react-router-dom";
import AddAuthor from "../pages/AddAuthor";
import EditAuthor from "../pages/EditAuthor";
import Home from "../pages/Home";

export const router= createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/new",
        element: <AddAuthor />
    },
    {
        path: "/edit/:id",
        element: <EditAuthor />
    }
])