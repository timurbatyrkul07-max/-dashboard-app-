 const express = require('express');
  const router = express.Router();                                              
  
  const contacts = [                                                            
    { id: 1, name: 'Natali Craig' },
    { id: 2, name: 'Drew Cano' },                                               
    { id: 3, name: 'Andi Lane' },
    { id: 4, name: 'Koray Okumus' },                                            
    { id: 5, name: 'Kate Morrison' },                                           
    { id: 6, name: 'Melody Macy' }                                              
  ];                                                                            
                                                                                
  router.get('/', (req, res) => {                                               
    res.json(contacts);
  });                                                                           
                  
  module.exports = router;

