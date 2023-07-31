import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
// import Cocktail from "./components/Cocktail";
// import Help from "./components/Help";
import Cart from "./components/Cart";
import RestaurantDetails from "./components/RestaurantDetails";
import Login from "./components/Login";
import Error from "./components/Error";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
// import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const About = lazy(() => import("./components/About"));
const Intoxicant = lazy(() => import("./components/Intoxicant"));
const Help = lazy(() => import("./components/Help"));

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={
              <h1 className="text-center text-5xl font-bold text-blue-400 mt-10">
                Loading...
              </h1>
            }>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/intoxicant",
        element: (
          <Suspense
            fallback={
              <h1 className="text-center text-5xl font-bold text-blue-400 mt-10">
                Loading...
              </h1>
            }>
            <Intoxicant />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: (
          <Suspense
            fallback={
              <h1 className="text-center text-5xl font-bold text-blue-400 mt-10">
                Loading...
              </h1>
            }>
            <Help />
          </Suspense>
        ),
      },

      {
        path: "/restaurant/:restaurantID",
        element: <RestaurantDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default App;
