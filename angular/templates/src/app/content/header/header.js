'use strict';

/**
 * @ngdoc function
 * @name ng.module:header
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('header', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:headerCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('HeaderCtrl', ['$scope', function ($scope) {
		$scope.msg = 'This is the HeaderCtrl controller';
	}]) //ghurt-marker:module
;