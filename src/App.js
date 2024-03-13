import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/products/Products.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Layout from "./components/shared/Layout.js";
import OrdersPage from "./components/orders/OrdersPage.js";
import Calender from "./components/calender/Calender.js";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "orders",
        element: <OrdersPage/>
      },
      {
        path: "/",
        element: <Dashboard />,
        index: true
      },
      {
        path: "/calender",
        element: <Calender/>
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={approuter}>
      <div className=""></div>
    </RouterProvider>
  );
}

export default App;
