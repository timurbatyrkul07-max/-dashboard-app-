 import { useState, useEffect } from 'react'                                   
  import axios from 'axios'
  import Sidebar from './components/Sidebar'
  import StatsCards from './components/StatsCards'                              
  import UsersChart from './components/UsersChart'
  import TrafficByDevice from './components/TrafficByDevice'                    
  import TrafficByLocation from './components/TrafficByLocation'
  import RightPanel from './components/RightPanel'                              
  import './App.css'                                                            
   
  const API = 'http://127.0.0.1:3001/api'                                       
                  
  function App() {                                                              
    const [stats, setStats] = useState(null)
    const [users, setUsers] = useState(null)
    const [devices, setDevices] = useState([])
    const [locations, setLocations] = useState([])
    const [notifications, setNotifications] = useState([])                      
    const [activities, setActivities] = useState([])
    const [contacts, setContacts] = useState([])                                
                                                                                
    useEffect(() => {
      axios.get(`${API}/stats/overview`).then(r => setStats(r.data))            
      axios.get(`${API}/stats/users`).then(r => setUsers(r.data))               
      axios.get(`${API}/stats/traffic/device`).then(r => setDevices(r.data))
      axios.get(`${API}/stats/traffic/location`).then(r => setLocations(r.data))
      axios.get(`${API}/notifications`).then(r => setNotifications(r.data))
      axios.get(`${API}/activities`).then(r => setActivities(r.data))           
      axios.get(`${API}/contacts`).then(r => setContacts(r.data))
    }, [])                                                                      
                                                                                
    if (!stats) return <div className="loading">Loading...</div>
                                                                                
    return (      
      <div className="dashboard">
        <Sidebar />
        <main className="main-content">
          <StatsCards stats={stats} />
          <div className="charts-row">                                          
            <UsersChart data={users} />
          </div>                                                                
          <div className="charts-row">
            <TrafficByDevice data={devices} />
            <TrafficByLocation data={locations} />                              
          </div>
        </main>                                                                 
        <RightPanel
          notifications={notifications}
          activities={activities}
          contacts={contacts}                                                   
        />
      </div>                                                                    
    )             
  }

  export default App
