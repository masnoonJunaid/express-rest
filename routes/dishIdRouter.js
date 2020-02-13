const express = require('express');
const bodyParser= require('body-parser');

const dishIdRouter = express.Router();

const app = express();

dishIdRouter.route('/')
.all((req,res, next ) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  next();
})
.get( (req,res, next) => {

        res.send('Will send details of the dish: ' + req.params.dishId + 'to you!');
})
.post((req,res,next) => {

        //constructing the reply message using the information from body of the request message and sending it back client and we can control what server is receiving and sending in the body of the message

        res.statusCode = 403;
	res.end('POST operation not supported on /dishes/' + req.params.dishId);
})
.put( (req,res,next) => {
        res.write('Updating the dish: ' + req.params.dishId + '\n');
	res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req,res,next) => {
        res.end('Deleting dish' + req.params.dishId);
});

module.exports = dishIdRouter
