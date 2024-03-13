import RecentOrdersTable from "./RecentOrdersTable.js";

const RecentOrders = () => {
  return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm ml-4 border border-gray-500 flex-1 w-96 h-[17rem] overflow-y-scroll"
			style={{background:"rgba( 155, 155, 155, 0.25 )", 
			boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
			backdropFilter:"blur( 4px );",
			borderRadius:"10px",
		}}
	  >
			<strong className="text-gray-300 font-medium">Recent Orders</strong>
			<div className="border-x border-gray-500 rounded-sm mt-3">
				<RecentOrdersTable/>
			</div>
		</div>
	)
}

export default RecentOrders;
