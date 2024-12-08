import { RouterProvider } from "react-router-dom";
import "./App.css";

import ReactGA from "react-ga4";
import { routes } from "./router";
ReactGA.initialize("G-MB4QPP471B");

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
