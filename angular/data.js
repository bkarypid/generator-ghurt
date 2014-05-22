'use strict';

var generatorData = {

	ngDependencies: {
		'angular-route' : {
			scriptDir: 'vendor/angular-route/angular-route.min.js',
			moduleName: 'ngRoute'
		},
		'angular-animate' : {
			scriptDir: 'vendor/angular-animate/angular-animate.min.js',
			moduleName: 'ngAnimate'
		},
		'angular-touch' : {
			scriptDir: 'vendor/angular-touch/angular-touch.min.js',
			moduleName: 'ngTouch'
		}
	},

	extDependencies: {
		'jquery' : {
			scriptDir: 'vendor/jquery/dist/jquery.js',
			objectName: '$'
		},
		'moment' : {
			scriptDir: 'vendor/moment/min/moment.min.js',
			objectName: 'moment'
		},
		'd3' : {
			scriptDir: 'vendor/d3/d3.min.js',
			objectName: 'd3'
		},
		'foundation' : {
			scriptDir: 'vendor/foundation/js/foundation.min.js'
		}
	},

	defaultConfig: {
		basicInfo: {
			name: '',
			description: '',
			version: '0.0.1',
			author: 'Capgemini Innovation',
			repo: '',
			license: '',
			pathPrefix: '',
			connectServerPort: 50300,
			quickInstall: false
		},
		ngDependencies: {
			ngVersion: 'latest',
			ngDepend: [
				'angular-route', 'angular-animate'
			]
		},
		extDependencies: {
			extDepend: [
				'jquery', 'foundation'
			]
		},
		fdnSettings: {
			isRequired: true,
			version: 'latest'
		}
	}
};

module.exports = generatorData;