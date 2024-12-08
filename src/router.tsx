import { createBrowserRouter } from "react-router-dom";
import { Home, VSLAula } from "./pages";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/aula-gratis',
        element: <VSLAula/>
    }
])