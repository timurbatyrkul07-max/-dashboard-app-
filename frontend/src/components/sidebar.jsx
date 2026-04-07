 function Sidebar() {
    const dashboards = ['Overview', 'eCommerce', 'Projects']
    const pages = ['User Profile', 'Account', 'Corporate', 'Blog', 'Social']

    return (
      <aside className="sidebar">
        <div className="sidebar-user">
          <div className="avatar">B</div>
          <span>ByeWind</span>
        </div>
        <div className="sidebar-section">
          <span className="section-title">Dashboards</span>
          {dashboards.map(item => (
            <div key={item} className={`sidebar-item ${item === 'Overview' ?
  'active' : ''}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="sidebar-section">
          <span className="section-title">Pages</span>
          {pages.map(item => (
            <div key={item} className="sidebar-item">{item}</div>
          ))}
        </div>
      </aside>
    )
  }

  export default Sidebar