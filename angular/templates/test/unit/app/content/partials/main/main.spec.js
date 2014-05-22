'use strict';
/*jshint camelcase: false */

describe('main module', function () {

	
	describe('mainCtrl controller', function () {

		var scope, MainCtrl;
		
		beforeEach(module('main'));
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			MainCtrl = $controller('MainCtrl', {
				$scope: scope
			});
		}));
		
		it('should have the msg correctly defined in the scope', function () {
			scope.$root.$digest();
			expect(scope.msg).toEqual('Content goes here');
		});

	});
//ghurt-marker:test
});