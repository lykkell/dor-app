const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/record/user").get(function (req, res) {
 let db_connect = dbo.getDb("dor");
 db_connect
   .collection("users")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/record/user/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("users")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});
 
// This section will help you create a new record.
recordRoutes.route("/record/user/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
    user_status: req.body.user_status,
    user_update: req.body.user_update,
    user_level: req.body.user_level,
    user_name: req.body.user_name,
    user_firstname: req.body.user_firstname,
    user_secondname: req.body.user_secondname,
    user_surname: req.body.user_surname,
    user_specialty: req.body.user_specialty,
    user_login: req.body.user_login,
    user_pass: req.body.user_pass,
 };
 db_connect
 .collection("users")
 .insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
recordRoutes.route("/update/user/:id").post(function (req, response) {
 let db_connect = dbo.getDb(); 
 let myquery = { _id: ObjectId( req.params.id )}; 
 let newvalues = {   
   $set: {     
    user_status: req.body.user_status,
    user_update: req.body.user_update,
    user_level: req.body.user_level,
    user_name: req.body.user_name,
    user_firstname: req.body.user_firstname,
    user_secondname: req.body.user_secondname,
    user_surname: req.body.user_surname,
    user_specialty: req.body.user_specialty,
    user_login: req.body.user_login,
    user_pass: req.body.user_pass,   
   }, 
  };
  db_connect
  .collection("users")
  .updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
 .collection("users")
 .deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;