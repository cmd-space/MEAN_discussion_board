// declare discuss_app as angular module and inject ngRoute
var discuss_app = angular.module('discuss_app', ['ngRoute']);
// routing
discuss_app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

discuss_app.factory('UserFactory', function($http) {
	var factory = {};
	var user = {};
	var users = [];

	factory.addUser = function(user, callback) {
		$http.post('/add_user', user).success(function(req, res) {
			user = res;
			callback(user);
		});
	}

	factory.addTopic = function(post, callback) {
		$http.post('/add_topic', post).success(function(req, res) {
			users = res;
			callback(users);
		});
	}

	return factory;
});

discuss_app.controller('UserController', function($scope, UserFactory, $location) {
	$scope.new_user = {};
	
	$scope.addUser = function() {
		UserFactory.addUser($scope.new_user, function(output) {
			$scope.user = output;
		});
		$location.url('/dashboard');
	}
	$scope.new_post = {};
	$scope.addTopic = function() {
		UserFactory.addTopic($scope.new_post, function(output) {
			$scope.users = output;
		});
		$scope.new_post = {};
	}
});