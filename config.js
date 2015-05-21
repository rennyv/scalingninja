var config = {};

//need to add in path variables from Azure
config.dbConnection =  process.env.dbConnection || 'mongodb://localhost:27017/try1';
config.secretHash =  process.env.secretHash || 'super sercet hash';
	
module.exports = config;