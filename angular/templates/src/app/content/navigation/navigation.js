'use strict';

/**
 * @ngdoc function
 * @name ng.module:navigation
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('navigation', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:navigationCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('NavigationCtrl', ['$scope', function ($scope) {
		$scope.msg = 'Demonstrator Inc.';
	}]) //ghurt-marker:module
;