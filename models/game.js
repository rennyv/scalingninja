var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({ 
	gamename: String,
	//players: {type: }
	created_at: { type: Date, default: Date.now }
	});
	
mongoose.model('Game', gameSchema);