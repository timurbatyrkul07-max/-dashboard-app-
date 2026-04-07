 function StatsCards({ stats }) {
    const cards = [
      { title: 'Views', value: stats.views.value, change: stats.views.change },
      { title: 'Visits', value: stats.visits.value, change: stats.visits.change
  },
      { title: 'New Users', value: stats.newUsers.value, change:
  stats.newUsers.change },
      { title: 'Active Users', value: stats.activeUsers.value, change:
  stats.activeUsers.change }
    ]

    return (
      <div className="stats-cards">
        {cards.map(card => (
          <div key={card.title} className="stat-card">
            <span className="stat-title">{card.title}</span>
            <div className="stat-bottom">
              <span className="stat-value">{card.value.toLocaleString()}</span>
              <span className={`stat-change ${card.change >= 0 ? 'positive' :
  'negative'}`}>
                {card.change >= 0 ? '+' : ''}{card.change}%
              </span>
            </div>
          </div>
        ))}
      </div>
    )
  }

  export default StatsCards