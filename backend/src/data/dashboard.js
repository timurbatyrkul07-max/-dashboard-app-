 const stats = {                                                               
    views: { value: 7265, change: 11.01 },
    visits: { value: 3671, change: -0.03 },                                     
    newUsers: { value: 156, change: 15.03 },                                    
    activeUsers: { value: 2318, change: 6.08 }                                  
  };                                                                            
                                                                                
  const usersMonthly = {                                                        
    thisYear: [10000, 15000, 12000, 18000, 22000, 28000, 25000],
    lastYear: [8000, 12000, 10000, 14000, 18000, 20000, 19000],                 
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']                   
  };                                                                            
                                                                                
  const trafficByWebsite = [                                                    
    { name: 'Google', value: 3 },
    { name: 'YouTube', value: 5 },                                              
    { name: 'Instagram', value: 3 },
    { name: 'Pinterest', value: 6 },                                            
    { name: 'Facebook', value: 1 },                                             
    { name: 'Twitter', value: 4 }
  ];                                                                            
                  
  const trafficByDevice = [                                                     
    { name: 'Linux', value: 2000 },
    { name: 'Mac', value: 5000 },                                               
    { name: 'iOS', value: 3000 },
    { name: 'Windows', value: 6000 },                                           
    { name: 'Android', value: 1000 },
    { name: 'Other', value: 4000 }                                              
  ];                                                                            
   
  const trafficByLocation = [                                                   
    { name: 'United States', value: 52.1 },
    { name: 'Canada', value: 22.8 },                                            
    { name: 'Mexico', value: 13.9 },
    { name: 'Other', value: 11.2 }                                              
  ];                                                                            
   
  const marketing = {                                                           
    data: [2000, 5000, 3000, 6000, 1000, 4000, 2000, 5000, 3000, 6000, 1000,
  4000],                                                                        
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec']                                                          
  };              
                                                                                
  module.exports = {
    stats,
    usersMonthly,
    trafficByWebsite,                                                           
    trafficByDevice,
    trafficByLocation,                                                          
    marketing     
  };

  /*Dashboard'daki tüm grafik ve kart verilerini burada tutuyoruz. */