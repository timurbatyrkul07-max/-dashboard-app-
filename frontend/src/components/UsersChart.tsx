import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer } from 'recharts'

  function UsersChart({ data }) {
    if (!data) return null

    const chartData = data.labels.map((label, i) => ({
      name: label,
      thisYear: data.thisYear[i],
      lastYear: data.lastYear[i]
    }))

    return (
      <div className="chart-card wide">
        <h3>Total Users</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="thisYear" stroke="#A855F7" name="This
   year" />
            <Line type="monotone" dataKey="lastYear" stroke="#06B6D4" name="Last
   year" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

  export default UsersChart