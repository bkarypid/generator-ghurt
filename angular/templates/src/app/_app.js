'use strict';

angular.module('app', ['templates', 'common'<%= _.map(ngDependencies.ngDepend, function (dep) { return ", '"+_ngDepend[dep].moduleName+"'"; }).join('') %>, 'content'])<% 
	if (_hasNgDepend('angular-route')) { %>
	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/content/partials/main/main.view.html',
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.html5Mode(true);
	}])<% } %>
	.run(['$rootScope', function ($rootScope) {
	$rootScope.$on('$viewContentLoaded', function () {
		$(document).foundation('reflow');
	});
}]);