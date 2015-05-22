var mongoose = require('mongoose');

var levelSchema = mongoose.Schema({
	hitpoints: Number,
	skillpoints: Number,
	class: String
});

var characterSchema = mongoose.Schema({
	name:  String,
	race: String,
	levels: [levelSchema]
	
});

mongoose.model('Character', characterSchema);