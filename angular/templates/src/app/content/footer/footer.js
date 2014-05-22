'use strict';

/**
 * @ngdoc function
 * @name ng.module:footer
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('footer', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:footerCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('FooterCtrl', ['$scope', function ($scope) {
		$scope.msg = 'This is the FooterCtrl controller';
	}]) //ghurt-marker:module
;