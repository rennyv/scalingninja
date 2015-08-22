var config = {};

//need to add in path variables from Azure... these are local variables no the actual.  Please change them on line
config.dbConnection =  process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost:27017/try1';
config.secretHash = process.env.SECRETHASH || 'super secret hash';
	
module.exports = config;
