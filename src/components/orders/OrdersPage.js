import OrdersTable from "./OrdersTable.js";

const OrdersPage = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold mb-4 text-gray-300">Orders Page</h1>
      <OrdersTable/>
    </div>
  );
};

export default OrdersPage;
