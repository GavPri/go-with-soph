import { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import AboutMe from "./pages/AboutMe";

function App() {
  // * Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route element={<Contact />} path="contact"></Route>
        <Route element={<Destinations />} path="destinations"></Route>
        <Route element={<AboutMe />} path="about"></Route>
      </Route>
    )
  );

  // * useEffect to handle theme changes
  useEffect(() => {
    // If the user has selected an theme, get that theme
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, []);

  const [selectedColorScheme, setselectedColorScheme] = useState("light");

  const handleColorSchemeChange = () => {
    const newTheme = selectedColorScheme === "light" ? "dark" : "light";

    document.body.classList.remove(selectedColorScheme);

    document.body.classList.add(newTheme);

    setselectedColorScheme(newTheme);
  };
  return (
    <div className="bg-body">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default App;
