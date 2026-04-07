  function TrafficByLocation({ data }) {
    const colors = ['#A855F7', '#3B82F6', '#22C55E', '#06B6D4']

    return (
      <div className="chart-card">
        <h3>Traffic by Location</h3>
        <div className="location-list">
          {data.map((item, i) => (
            <div key={item.name} className="location-item">
              <div className="location-left">
                <div className="location-dot" style={{ background: colors[i]
  }}></div>
                <span>{item.name}</span>
              </div>
              <span>{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  export default TrafficByLocation