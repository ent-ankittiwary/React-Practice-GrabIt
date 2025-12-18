import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Error from "./Error.jsx";
// import About1 from "./About1.jsx";
// import About from "./About.jsx";
import Contact from "./Contact.jsx";
import RestaurantMenu from "./RestaurantMenu.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { MENU_API } from "./utils/constants.js"; 
import {lazy,Suspense} from "react";
const About=lazy(()=>import ("./About.jsx"));

// import resList from "./utils/resList.jsx";
// const resId= {resList.info.resId};


// Layout component with Header + Outlet
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// Define router FIRST
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,   // ✅ use element, not component
    errorElement: <Error />,
    children: [
      {
        index:true,          // ✅ for "/"
        element: <Body />,
      },
      {
        path: "/About",        // ✅ no need starting slash for children
        element: <Suspense fallback={<h2>Loading...</h2>}>
          <About/>
        </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
      path:"/kanpur/:newMenuUrl/*",
      element: <RestaurantMenu />,
      }
    ],
  },
]);

// App just renders the RouterProvider
const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
