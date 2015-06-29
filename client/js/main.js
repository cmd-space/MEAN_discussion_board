var discuss_app = angular.module('friends_app', [ngRoute]);

discuss_app.factory('UserFactory', function($http) {
	var factory = {};
	var users = [];

	return factory;
});

discuss_app.controller('UserController', function($scope, UserFactory) {
	
});