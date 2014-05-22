'use strict';

/**
 * @ngdoc function
 * @name ng.module:main
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('main', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:mainCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('MainCtrl', ['$scope', function ($scope) {
		$scope.title = 'Demonstrator Home Page';
		$scope.msg = 'Content goes here';
	}])
;