import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr className="bg-gray-700 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left text-gray-300">ID</th>
        <th className="py-3 px-6 text-left text-gray-300">Product ID</th>
        <th className="py-3 px-6 text-left text-gray-300">Customer Name</th>
        <th className="py-3 px-6 text-left text-gray-300">Order Date</th>
        <th className="py-3 px-6 text-left text-gray-300">Order Total</th>
        <th className="py-3 px-6 text-left text-gray-300">Shipping Address</th>
        <th className="py-3 px-6 text-left text-gray-300">Order Status</th>
      </tr>
    </thead>
  );
};

export default TableHead;
