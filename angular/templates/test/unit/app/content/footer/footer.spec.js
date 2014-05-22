'use strict';
/*jshint camelcase: false */

describe('footer module', function () {

	
	describe('footerCtrl controller', function () {

		var scope, FooterCtrl;
		
		beforeEach(module('footer'));
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			FooterCtrl = $controller('FooterCtrl', {
				$scope: scope
			});
		}));
		
		it('should have the msg correctly defined in the scope', function () {
			scope.$root.$digest();
			expect(scope.msg).toEqual('This is the FooterCtrl controller');
		});

	});
//ghurt-marker:test
});