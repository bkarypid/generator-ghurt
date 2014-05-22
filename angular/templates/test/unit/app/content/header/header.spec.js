'use strict';
/*jshint camelcase: false */

describe('header module', function () {

	
	describe('headerCtrl controller', function () {

		var scope, HeaderCtrl;
		
		beforeEach(module('header'));
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			HeaderCtrl = $controller('HeaderCtrl', {
				$scope: scope
			});
		}));
		
		it('should have the msg correctly defined in the scope', function () {
			scope.$root.$digest();
			expect(scope.msg).toEqual('This is the HeaderCtrl controller');
		});

	});
//ghurt-marker:test
});