const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const accessRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
accessRoutes.route("/access").get(function (req, res) {
 let db_connect = dbo.getDb("dor");
 db_connect
   .collection("accesses")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
accessRoutes.route("/access/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("accesses")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});
 
// This section will help you create a new record.
accessRoutes.route("/access/add").post(function (req, response) {
 let db_connect = dbo.getDb("accesses");
 let myobj = {
  
    user_id: req.body.user_id,
    updated: req.body.updated,
    group: req.body.group,
    level: req.body.level,
    login: req.body.login,
    pass: req.body.pass,
 };
 db_connect
 .collection("accesses")
 .insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
accessRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb("dor"); 
 let myquery = { _id: ObjectId( req.params.id )}; 
 let newvalues = {   
   $set: {     
    user_id: req.body.user_id,
    updated: req.body.updated,
    group: req.body.group,
    level: req.body.level,
    login: req.body.login,
    pass: req.body.pass,  
   }, 
  };
  db_connect
  .collection("accesses")
  .updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});
 
// This section will help you delete a record
accessRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
 .collection("accesses")
 .deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = accessRoutes;