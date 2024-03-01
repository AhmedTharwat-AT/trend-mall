import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";
import store from "./store";
import { lazy } from "react";

import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./components/PageNotFound";
import ErrorFallback from "./components/ErrorFallback";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Shop = lazy(() => import("./pages/Shop"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Account = lazy(() => import("./pages/Account"));
const Cart = lazy(() => import("./pages/Cart"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const NewPassword = lazy(() => import("./pages/NewPassword"));
const Checkout = lazy(() => import("./pages/Checkout"));

import PersonalInfo from "./features/user/PersonalInfo";
import Orders from "./features/order/Orders";
import Wishlist from "./features/user/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
      >
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:productID",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "order/checkout",
        element: <Checkout />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "new-password",
        element: <NewPassword />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "account",
        element: <Account />,
        children: [
          {
            index: true,
            element: <Navigate to="profile" replace />,
          },
          {
            index: true,
            path: "profile",
            element: <PersonalInfo />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
          {
            path: "*",
            element: <Navigate to="profile" replace />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
      <Toaster position="top-center" />
    </Provider>
  );
}

export default App;
