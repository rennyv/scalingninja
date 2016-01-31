var config = require('./../config');
var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Post = mongoose.model('Post');
var Character = mongoose.model('Character');

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


router.use('/character', isAuthenticated);

//api for characters
router.route('/character')
	.post(function(req, res){
		var character = new Character();
		character.name = req.body.name;
		character.owner = req.user._id;
		
		character.save(function(err, character) {
			if (err){
				return res.send(500, err);
			}

        Character.find({})
            //.populate('owner', "username")
            .exec(function(error, characters) {
                console.log(JSON.stringify(characters, null, "\t"))
            })
    });
		
		return res.json(character);
		
	})
    .get(function(req, res){
        Character.find(function(err, characters){
            if(err){
                return res.send(500, err);
            }
            return res.status(200).send(characters);
        })
    })
    .delete(function(req, res){
       Character.remove({}, function(err) {
			if (err)
				res.send(err);
			res.json("deleted :(");
		}); 
    });

//Register the authentication middleware
router.use('/posts', isAuthenticated);

//api for all posts
router.route('/posts')
//creates a new post
	.post(function(req, res){
		var post = new Post();
		post.text = req.body.text;
		post.created_by = req.body.created_by;
		post.save(function(err, post) {
			if (err){
				return res.send(500, err);
			}
			return res.json(post);
		});
	})
	//gets all posts
	.get(function(req, res){
		Post.find(function(err, posts){
			if(err){
				return res.send(500, err);
			}
			return res.send(200,posts);
		});
	});

//api for a specfic post
router.route('/posts/:id')
//gets specified post
	.get(function(req, res){
		Post.findById(req.params.id, function(err, post){
			if(err)
				res.send(err);
			res.json(post);
		});
	}) 
	//updates specified post
	.put(function(req, res){
		Post.findById(req.params.id, function(err, post){
			if(err)
				res.send(err);

			post.created_by = req.body.created_by;
			post.text = req.body.text;

			post.save(function(err, post){
				if(err)
					res.send(err);

				res.json(post);
			});
		});
	})
	//deletes the post
	.delete(function(req, res) {
		Post.remove({
			_id: req.params.id
		}, function(err) {
			if (err)
				res.send(err);
			res.json("deleted :(");
		});
	});

module.exports = router;