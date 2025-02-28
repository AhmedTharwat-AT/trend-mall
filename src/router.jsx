import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, Navigate } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import ErrorFallback from "./components/ErrorFallback";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import NewPassword from "./pages/NewPassword";
import ProductPage from "./pages/ProductPage";
import ResetPassword from "./pages/ResetPassword";
import Orders from "./features/order/Orders";
import PersonalInfo from "./features/user/PersonalInfo";
import Wishlist from "./features/user/Wishlist";

import {
  About,
  Account,
  Cart,
  Checkout,
  Contact,
  Login,
  Shop,
  Signup,
} from "./routes";

const router = createBrowserRouter([
  {
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
        path: "signup",
        element: <Signup />,
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

export default router;
