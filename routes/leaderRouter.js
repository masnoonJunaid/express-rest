const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();
})
.get((req,res,next) =>{
	res.end('This is the result of GET request of leaderRouter module');
})
.post((req,res,next) => {
	res.end('You will add about yourself :' + res.body.leader + 'and your parliament seat detail' + req.body.seat);
})
.put((req,res,next) => {
	// status code 403 signifies certain operation doesn't supported here
	res.statusCode = 403;
	res.end('')
res.end('PUT operation is not supported on leadership');
})
.delete((req,res,next) => {
	res.end('Deleting your leadership profile');
})

leaderRouter.route('/:leaderId')

module.exports =  leaderRouter;
