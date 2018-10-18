const db = require('../models/');

const mongoose = require("mongoose");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {



  //get routes
  app.get('/api/events', function(req, res) {
    db.Event.find({})
    .then(function(data) {
      // If any Books are found, send them to the client
      res.json(data);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
  });

  app.get('/api/calendar', function(req, res) {
    db.Calendar.find({})
    .then(function(data) {
      // If any Books are found, send them to the client
      res.json(data);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
  });

  
  
  app.get('/api/date/:day', function(req, res) { //set up specific day 
    const matchingEvents = [];
    db.Event.find({})
    .then(function(data) {
      data.forEach(event => {
        if (event.date === req.params.day){
          matchingEvents.push(event);
        }
      })
      // If any Books are found, send them to the client
      res.json(matchingEvents);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
  });


  
  // post routes
  app.post('/api/events', function(req, res) {
    db.Event.create(req.body)
    .then(function(dbItem) {
      return res.json(dbItem);
    })
    .then(function(data) {
      // If the Library was updated successfully, send it back to the client
      res.json(data);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
  });

  app.post('/api/calendar', function(req, res) {
    db.Calendar.create(req.body)
    .then(function(dbItem) {
      console.log(dbItem);
      return res.json(dbItem);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
  });



  /// put routes
  app.put('/api/event/:event', function(req, res) {
    db.Event.findOneAndUpdate({name: req.params.eventName}, { $set: { name: req.body.name , events: req.body.events , selected: req.body.selected } }, { new: true })
    .then(function(dbItem) {
      console.log(dbItem);
      return res.json(dbItem);
    })
      .catch(function(err) {
      res.json(err);
    });
  });

  app.put('/api/calendar/:calendarName', function(req, res) {
    console.log(req.params.calendarName);
    db.Calendar.findOneAndUpdate({name: req.params.calendarName}, { $set: { name: req.body.name , events: req.body.events , selected: req.body.selected } }, { new: true })
    .then(function(dbItem) {
      console.log(dbItem);
      return res.json(dbItem);
    })
      .catch(function(err) {
      res.json(err);
    });
  });


  
  //delete routes
  app.delete('/api/events/:eventName', function(req, res) {
    console.log(req.params.eventName);
    db.Event.findOneAndDelete({name: req.params.eventName})
    .then(function(dbItem) {
      console.log(dbItem);
      return res.json(dbItem);
    })
      .catch(function(err) {
      res.json(err);
    });
  });

  app.delete('/api/calendar/:calendarName', function(req, res) {
    console.log(req.params.calendarName);
    db.Calendar.findOneAndDelete({name: req.params.calendarName})
    .then(function(dbItem) {
      console.log(dbItem);
      return res.json(dbItem);
    })
      .catch(function(err) {
      res.json(err);
    });
  });
}
