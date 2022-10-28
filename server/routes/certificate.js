const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const certificateRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// // This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 // This section will help you get a list of all the certificates.
 certificateRoutes.route("/certificate").get(function (req, res) {
  let db_connect = dbo.getDb("dor");
  db_connect
    .collection("certificates")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

 // This section will help you create a new certificate.
 certificateRoutes.route("/certificate/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
     crt_status: req.body.crt_status,
     update: req.body.update,
     user_id: req.body.user_id,
     user_name: req.body.user_name,
     platform_id: req.body.platform_id,
     platform_name: req.body.platform_name,
     seminar_id: req.body.seminar_id,
     seminar_name: req.body.seminar_name,
  };
  db_connect
  .collection("certificates")
  .insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
 });

 // This section will help you update a record by id.
 certificateRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb("dor"); 
  let myquery = { _id: ObjectId( req.params.id )}; 
  let newvalues = {   
    $set: {  
     crt_status: req.body.crt_status,
     user_name: req.body.user_name,
     platform_id: req.body.platform_id,
     platform_name: req.body.platform_name,
     seminar_id: req.body.seminar_id,
     seminar_name: req.body.seminar_name,
    }, 
   };
   db_connect
   .collection("users")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     response.json(res);
   });
 });

module.exports = certificateRoutes;