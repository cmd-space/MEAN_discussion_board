var user = require('./../server/controllers/users.js');

module.exports = function(app) {
	app.get('/users', function(req, res) {
		user.show(req, res);
	});
	app.post('/add_user', function(req, res) {
		user.add(req, res);
	});
}