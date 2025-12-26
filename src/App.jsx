import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/Services.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import LandScape from "./pages/LandScape/LandScape.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Constructions from "./pages/Constructions/Constructions.jsx";
import SupplyingTrees from "./pages/SupplyingTrees/SupplyingTrees.jsx";
import Projects from "./pages/Projects/Projects.jsx";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "Projects", element: <Projects /> },
      { path: "services", element: <Services /> },
      { path: "/services/constructions", element: <Constructions /> },
      { path: "/services/landscape", element: <LandScape /> },
      { path: "/services/supplying-trees", element: <SupplyingTrees /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
