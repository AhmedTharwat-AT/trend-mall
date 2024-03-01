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
import { Suspense, lazy } from "react";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./components/PageNotFound";
import ErrorFallback from "./components/ErrorFallback";
import ResetPassword from "./pages/ResetPassword";
import NewPassword from "./pages/NewPassword";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Shop = lazy(() => import("./pages/Shop"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Account = lazy(() => import("./pages/Account"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));

import PersonalInfo from "./features/user/PersonalInfo";
import Orders from "./features/order/Orders";
import Wishlist from "./features/user/Wishlist";
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
        element: (
          <Suspense
            fallback={
              <div className="h-96 w-full">
                <Spinner />
              </div>
            }
          >
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "shop/:productID",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: (
          <Suspense
            fallback={
              <div className="h-96 w-full">
                <Spinner />
              </div>
            }
          >
            <Cart />
          </Suspense>
        ),
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
        element: (
          <Suspense
            fallback={
              <div className="h-96 w-full">
                <Spinner />
              </div>
            }
          >
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense
            fallback={
              <div className="h-96 w-full">
                <Spinner />
              </div>
            }
          >
            <Login />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense
            fallback={
              <div className="h-96 w-full">
                <Spinner />
              </div>
            }
          >
            <Signup />
          </Suspense>
        ),
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
        element: (
          <Suspense
            fallback={
              <div className="h-96 w-full">
                <Spinner />
              </div>
            }
          >
            <Account />
          </Suspense>
        ),
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
