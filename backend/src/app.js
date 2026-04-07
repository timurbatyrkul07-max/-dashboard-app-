 const express = require('express');                                           
  const cors = require('cors');
  require('dotenv').config();

  const app = express();
  const PORT = process.env.PORT || 3001;
                                                                                
  app.use(cors());
  app.use(express.json());                                                      
                  
  // Routes
  app.use('/api/stats', require('./routes/stats'));
  app.use('/api/notifications', require('./routes/notifications'));
  app.use('/api/activities', require('./routes/activities'));                   
  app.use('/api/contacts', require('./routes/contacts'));
                                                                                
  app.get('/', (req, res) => {
    res.json({ message: 'Dashboard API is running' });
  });                                                                           
   
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });

/*- Express server'ı başlatıyor
  - CORS açıyor (frontend erişebilsin)                                          
  - 4 tane route tanımlıyor (stats, notifications, activities, contacts)
  - Port 3001'de dinliyor   */