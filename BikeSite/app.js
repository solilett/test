
var myApp = angular.module('myApp', ['ngRoute']);



myApp.controller('mainController', function($scope) {});
myApp.controller('MyCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();

    }
});



myApp.config(function ($routeProvider) {
	

	$routeProvider 
	
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})
	
	.when('/custom', {
		templateUrl: 'pages/custom.php?',
		controller: 'mainController'
	})

	.when('/login', {
		templateUrl: 'pages/login.html',
		controller: 'mainController'
	})
	.when('/account', {
		templateUrl: 'pages/account.php',
		controller: 'mainController'
	})
	.when('/storedBikes', {
		templateUrl: 'pages/storedBikes.php',
		controller: 'mainController'
	})
	.when('/logout', {
		templateUrl: 'pages/login/logout.php',
		controller: 'mainController'
	})
	.when('/editAccount', {
		templateUrl: 'pages/Account/edit.php',
		controller: 'mainController'

	})
	.when('/changePassword', {
		templateUrl: 'pages/Account/updatePassword.php',
		controller: 'mainController'
	})
});	








