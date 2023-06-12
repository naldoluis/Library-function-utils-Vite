import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const pdata = [
    {
        name: 'Microservices',
        student: 30,
        sales: 120
    },
    {
        name: 'Microservices in.Net',
        student: 7,
        sales: 12
    },
    {
        name: 'HTTP/2',
        student: 10,
        sales: 27
    },
    {
        name: 'Unity in Action',
        student: 9,
        sales: 17
    },
    {
        name: 'Enterprise OSGI',
        student: 20,
        sales: 46
    },
    {
        name: 'AspectJ in Action',
        student: 5,
        sales: 19
    }
]

export default function ScientificCalculator() {

  return (
    <>
     <h6 className="text-light py-3">Book Sales 📊</h6>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata}>
          <CartesianGrid/>
          <XAxis dataKey="name" stroke="white" interval={'preserveStartEnd'}/>
          <YAxis></YAxis>
          <Legend/>
          <Tooltip/>
          <Line dataKey="student" stroke="green" activeDot={{ r: 8 }}/>
          <Line dataKey="sales" stroke="orange" activeDot={{ r: 8 }}/>
        </LineChart>
      </ResponsiveContainer>
    </>
  )}