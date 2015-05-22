var config = {};

//need to add in path variables from Azure
config.dbConnection =  process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost:27017/try1';
config.secretHash = 'super sercet hash';
	
module.exports = config;