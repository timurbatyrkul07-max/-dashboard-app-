 function RightPanel({ notifications, activities, contacts }) {
    return (
      <aside className="right-panel">
        <div className="panel-section">
          <h3>Notifications</h3>
          {notifications.map(n => (
            <div key={n.id} className="panel-item">
              <span className="panel-message">{n.message}</span>
              <span className="panel-time">{n.time}</span>
            </div>
          ))}
        </div>
        <div className="panel-section">
          <h3>Activities</h3>
          {activities.map(a => (
            <div key={a.id} className="panel-item">
              <span className="panel-message">{a.action}</span>
              <span className="panel-time">{a.time}</span>
            </div>
          ))}
        </div>
        <div className="panel-section">
          <h3>Contacts</h3>
          {contacts.map(c => (
            <div key={c.id} className="panel-item">
              <div className="contact-avatar">{c.name[0]}</div>
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </aside>
    )
  }

  export default RightPanel