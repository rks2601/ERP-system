import TransactionChart from "../charts/TransactionChart.js";
import DashboardStartsGrid from "./DashboardStartsGrid.js";
import BuyerProfileChart from "../charts/BuyerProfileChart.js";
import RecentOrders from "../dashboardOrders/RecentOrders.js";
import PopularProducts from "../dashboardOrders/PopularProducts.js";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4" style={{backgroundColor:"#202020"}}>
      <DashboardStartsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfileChart />
      </div>

      <div className="flex flex-row gap-4 w-full">
        <RecentOrders/>
        <PopularProducts/>
      </div>
    </div>
  );
};

export default Dashboard;
