const express = require('express');
  const router = express.Router();

  const notifications = [                                                       
    { id: 1, message: 'You fixed a bug.', time: 'Just now' },
    { id: 2, message: 'New user registered.', time: '59 minutes ago' },         
    { id: 3, message: 'You fixed a bug.', time: '12 hours ago' },
    { id: 4, message: 'Andi Lane subscribed to you.', time: 'Today, 11:59 AM' } 
  ];                                                                            
                                                                                
  router.get('/', (req, res) => {                                               
    res.json(notifications);
  });

  module.exports = router;
