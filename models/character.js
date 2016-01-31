var mongoose = require('mongoose');

var levelSchema = mongoose.Schema({
	attackbonus: Number,
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
	weight: Number,
	hair: String,
	eyes: String,
	skin: String,
	age: Number,
	alignment: String,
	deity: String,
	levels: [levelSchema],
	owner: { type : mongoose.Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Character', characterSchema);