var config = require('./../config');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Follower = mongoose.model('Follower');

//Used for routes that must be authenticated.
function isAuthenticated (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects

	//allow all get request methods
	if(req.method === "GET"){
		return next();
	}
	if (req.isAuthenticated()){
		return next();
	}

	// if the user is not authenticated then redirect him to the login page
	return res.redirect('/login');
};

//Register the authentication middleware
router.use('/followers', isAuthenticated);

//api for all posts
router.route('/followers')
	
	//create a new post
	.post(function(req, res){
		var follower = new Follower();
		follower.name = "Hello"
		follower.save(function(err, follower) {
			if (err){
				return res.send(500, err);
			}
			return res.json(follower);
		});
	})

	.get(function(req, res){
			Follower.find(function(err, followers){
				if(err){
					return res.send(500, err);
				}
				return res.send(200,followers);
			});
	});

//api for a specfic post
router.route('/posts/:id')
	
	//create
	.put(function(req,res){
		return res.send({message:'TODO modify an existing post by using param ' + req.param.id});
	})

	.get(function(req,res){
		return res.send({message:'TODO get an existing post by using param ' + req.param.id});
	})

	.delete(function(req,res){
		return res.send({message:'TODO delete an existing post by using param ' + req.param.id});
	});

module.exports = router;