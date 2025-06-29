import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Timer from "./pages/Timer";
import Todo from "./pages/Todo";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Bike from "./components/Bike";
import BikeDetails from "./components/BikeDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "todo", element: <Todo /> },
        { path: "timer", element: <Timer /> },
        { path: "contact", element: <Contact /> },
        { path: "bike", element: <Bike /> },
      ],
    },
    {
      path: "/bike",
      element: <Bike />,
      children: [
        { index: true, element: <Bike /> },
        { path: "/bike/:id", element: <BikeDetails /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
