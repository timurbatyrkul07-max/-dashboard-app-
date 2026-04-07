 const express = require('express');
  const router = express.Router();                                              
   
  const activities = [                                                          
    { id: 1, user: 'ByeWind', action: 'Changed the style.', time: 'Just now' },
    { id: 2, user: 'ByeWind', action: 'Released a new version.', time: '59 minutes ago' },
    { id: 3, user: 'ByeWind', action: 'Submitted a bug.', time: '12 hours ago'  
  },                                                                            
    { id: 4, user: 'ByeWind', action: 'Modified A data in Page X.', time:
  'Today, 11:59 AM' },                                                          
    { id: 5, user: 'ByeWind', action: 'Deleted a page in Project X.', time: 'Feb2, 2026' }                                                                   
  ];                                                                                              
  router.get('/', (req, res) => {
    res.json(activities);
  });

  module.exports = router;
