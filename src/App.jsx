import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import store from "./store";
import router from "./router";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
      <Toaster position="top-center" />
    </Provider>
  );
}

export default App;
