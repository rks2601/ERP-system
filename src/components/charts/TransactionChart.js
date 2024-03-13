import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "../lib/constants/config.js";

const TransactionChart = () => {
  return (
    <div className="h-[22rem] bg-white p-1 pr-4 ml-4 mr-1 rounded-sm border border-gray-500 flex flex-col flex-1" 
      style={{background:"rgba( 155, 155, 155, 0.25 )", 
      boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
      backdropFilter:"blur( 4px );",
      borderRadius:"10px"}}
    >
      <strong className="text-gray-300 font-medium">Transactions</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#00C49F" />
            <Bar dataKey="Expense" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;
