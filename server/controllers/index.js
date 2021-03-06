var models = require('../models');
var bluebird = require('bluebird');
var utils = require('../utils');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        var object = {
          results: data
        };
        console.log("object", object);
        // res.statusCode = 200;
        // res.end(JSON.stringify(object));
        utils.sendResponse(res, object);
      }); //what do we do with the array of objects
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, function(results){
        utils.sendResponse(res, results, 200);        
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("talking to models")      
      models.users.get(function(data) {
        utils.sendResponse(res, data);
      }); //what do we do with the array of objects
    },
    post: function (req, res) {
      models.users.post(req, function(results){
        utils.sendResponse(res, results, 200);
      });
    }
  }
};

