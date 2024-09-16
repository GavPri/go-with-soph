
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
