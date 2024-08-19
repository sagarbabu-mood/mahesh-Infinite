import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const Chart = () => {
  const details = [
    {
      name: 'Jan',
      priceUSD: 1500,
    },
    {name: 'Feb', priceUSD: 500},
    {name: 'Mar', priceUSD: 1300},
    {name: 'Apr', priceUSD: 1500},
    {name: 'May', priceUSD: 1000},
    {name: 'Jun', priceUSD: 300},
    {name: 'Jul', priceUSD: 1500},
    {name: 'Aug', priceUSD: 400},
    {name: 'Sep', priceUSD: 300},
    {name: 'Oct', priceUSD: 150},
    {name: 'Nov', priceUSD: 3500},
    {name: 'Dec', priceUSD: 100},
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={details}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="name" fill="#888fab" />
        <Bar dataKey="priceUSD" fill="#cd51db" />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default Chart
