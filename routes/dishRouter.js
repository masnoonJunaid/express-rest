const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
const app = express();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all( (req,res,next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();
})
.get((req,res,next) => {
	res.end('Will send all the dishes to you!');
})
.post((req,res,next) => {
	res.end('Will add the dish: '+ res.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next) => {
	res.statusCode = 403;
	res.end('PUT operation not supported on /dishes');
})
.delete( (req,res,next) => {
	res.end('Deleting all the dishes to you');
});


// This is the change I had to make tp support dishId Call
dishRouter.route('/:dishId')
.all((req,res, next ) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  next();
})
.get( (req,res, next) => {

        res.end('Will send details of the dish: ' + req.params.dishId + 'to you!');
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



// REST api for dishId call

module.exports = dishRouter;
