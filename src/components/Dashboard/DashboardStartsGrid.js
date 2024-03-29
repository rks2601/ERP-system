import BoxWrapper from "./BoxWrapper.js";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

const DashboardStartsGrid = () => {
  return (
    <div className="flex gap-4 w-full py-3 px-4 pb-1">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-400 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-300 font-semibold">
              $56890.25
            </strong>
            <span className="text-sm text-green-500 pl-2">+173</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-400 font-light">
            Total Expenses
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-300 font-semibold">
              $3423
            </strong>
            <span className="text-sm text-green-500 pl-2">+343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-400 font-light">
            Total Customers
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-300 font-semibold">
              12313
            </strong>
            <span className="text-sm text-red-500 pl-2">-30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-400 font-light">Total Orders</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-300 font-semibold">
              16432
            </strong>
            <span className="text-sm text-red-500 pl-2">-43</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardStartsGrid;
