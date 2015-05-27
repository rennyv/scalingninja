var mongoose = require('mongoose');

var professionSchema = mongoose.Schema({
	name: String,
	rank: String
});

var followerSchema = mongoose.Schema({
	type: String,
	race: String,
	gender: String,
	class: String,
	mythictier: Number,
	level: Number,
	experience: Number,
	professions: [professionSchema],
	cost: Number,
	dailyincome: Number,
	township: String,
	days: Number,
	profit: Number,
	location: String,
	notes: String
});

mongoose.model('Follower', followerSchema);
