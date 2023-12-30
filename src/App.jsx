import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import PageNotFound from "./components/PageNotFound";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";
import PersonalInfo from "./features/user/PersonalInfo";
import Orders from "./features/order/Orders";
import PaymentMethod from "./features/user/PaymentMethod";
import Wishlist from "./features/user/Wishlist";
import ResetPassword from "./pages/ResetPassword";
import NewPassword from "./pages/NewPassword";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

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
            path: "payment",
            element: <PaymentMethod />,
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
