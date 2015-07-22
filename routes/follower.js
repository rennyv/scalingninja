var express = require('express');
var router = express.Router();

//Used for routes that must be authenticated.
function isAuthenticated (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	//allow all get request methods
		console.log("isAuthenticated sub");
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

router.route('/followers')
	.get(function (req, res) {
		return res.send({message:'TODO: get all the followers'});		
	});

module.exports = router;