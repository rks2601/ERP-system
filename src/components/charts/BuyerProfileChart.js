import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { data1,COLORS, } from '../lib/constants/config.js';
import {renderCustomizedLabel} from '../lib/constants/helper.js'

const BuyerProfileChart = () => {
  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 mr-4 rounded-sm border border-gray-500 flex flex-col"
        style={{background:"rgba( 155, 155, 155, 0.25 )", 
        boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
        backdropFilter:"blur( 4px );",
        borderRadius:"10px"}}
      >
        <strong className="text-gray-300 font-medium">Buyer Profile</strong>
        <div className="mt-3 w-full flex-1 text-xs">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={300}>
                    <Pie
                        data={data1}
                        cx="50%"
                        cy="45%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={105}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data1.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
)
}

export default BuyerProfileChart;
