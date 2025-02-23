import { createBrowserRouter } from "react-router-dom";
import { DevCash, Home, SummaryContent, VSLAula } from "./pages";
import Catalog from "./pages/Catalog/Catalog";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aula-gratis",
    element: <VSLAula />,
  },
  {
    path: "/dev-cash",
    element: <DevCash />,
  },
  {
    path: "/summary-content",
    element: <SummaryContent />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
]);
