var mongoose = require('mongoose');

var levelSchema = mongoose.Schema({
	baseattackbonus: Number,
	fort: Number,
	ref: Number,
	will: Number,
	hitdice: Number,
	hitpoints: Number,
	skillpoints: Number,
	class: String,
	levels: Number
});

var characterSchema = mongoose.Schema({
	name:  String,
	race: String,
	size: String,
	gender: String,
	height: Number,
	weight: String,
	hair: String,
	eyes: String,
	skin: String,
	age: Number,
	alignment: String,
	deity: String,
	levels: [levelSchema]
	
});

mongoose.model('Character', characterSchema);