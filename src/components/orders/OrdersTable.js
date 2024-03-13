import { useState } from 'react';
import { ORDERS_DATA } from '../lib/constants/config.js';
import TableHead from './TableHead.js';
import TableBody from './TableBody.js';
import Pagination from './Pagination.js';

const OrdersTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 10;
    const totalPages = Math.ceil(ORDERS_DATA.length / ordersPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const paginatedOrders = ORDERS_DATA.slice(
      (currentPage - 1) * ordersPerPage,
      currentPage * ordersPerPage
    );
  
    return (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <TableHead/>
            <TableBody paginatedOrders={paginatedOrders}/>
          </table>
          <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
        </div>
      );
  };
  
  export default OrdersTable;
  