import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FlightinfoPage from "./pages/ExamplePage/Flightinfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "flights",
    element: <FlightinfoPage />,
  },
]);
