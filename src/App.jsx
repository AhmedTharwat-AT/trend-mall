import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";
import store from "./store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense, lazy } from "react";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import PageNotFound from "./components/PageNotFound";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";

import Account from "./pages/Account";
import PersonalInfo from "./features/user/PersonalInfo";
import Orders from "./features/order/Orders";
import Wishlist from "./features/user/Wishlist";
// import PaymentMethod from "./features/user/PaymentMethod";

import ResetPassword from "./pages/ResetPassword";
import NewPassword from "./pages/NewPassword";
import ErrorFallback from "./components/ErrorFallback";
import Spinner from "./components/Spinner";

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
        element: (
          <Suspense
            fallback={
              <div className="h-96 w-full">
                <Spinner />
              </div>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense
            fallback={
              <div className="h-96 w-full">
                <Spinner />
              </div>
            }
          >
            <Contact />
          </Suspense>
        ),
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
