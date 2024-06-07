import React, { lazy, Suspense } from "react"; // importing react from node module
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import RestaurantMenu from "./components/RestaurantMenu";
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

// react element => js object => root.render => becomes html element => will replace everything written in root div

const AppLayout = () => {
  return (
    <div className="app">
      {/* header */} <Header />
      {/* if path "/" we want Body , if path "/about" we want About and so on to display below header */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:resId", //:resId means this part is dynamic
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
