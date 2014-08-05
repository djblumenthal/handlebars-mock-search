var dummyData = require('../models/dummy-data.js')

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	searchLang: function(req, res){

	}
};

module.exports = indexController;