 const express = require('express');                                           
  const router = express.Router();
  const { stats, usersMonthly, trafficByWebsite, trafficByDevice,               
  trafficByLocation, marketing } = require('../data/dashboard');

  router.get('/overview', (req, res) => {                                       
    res.json(stats);
  });                                                                           
                  
  router.get('/users', (req, res) => {                                          
    res.json(usersMonthly);
  });                                                                           
                  
  router.get('/traffic/website', (req, res) => {
    res.json(trafficByWebsite);
  });

  router.get('/traffic/device', (req, res) => {                                 
    res.json(trafficByDevice);
  });                                                                           
                  
  router.get('/traffic/location', (req, res) => {
    res.json(trafficByLocation);
  });

  router.get('/marketing', (req, res) => {
    res.json(marketing);
  });                                                                           
   
  module.exports = router;      