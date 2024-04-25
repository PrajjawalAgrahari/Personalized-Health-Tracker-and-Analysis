// // App.js

import "./LineChart.css";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// Sample chart data


const LinChart_1 = ({props}) => {
  return (
    <div className="lin">
      {/* {console.log(props.data)} */}
      {/* {console.log(one)} */}
      <h1 className="text-heading">Tracking Weight</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={props} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="month" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="weight" stroke="black" activeDot={{ r: 8 }} />
          {/* <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LinChart_1;
