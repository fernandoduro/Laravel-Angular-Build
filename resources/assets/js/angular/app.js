var ceuSite = angular.module('ceu', ['ngRoute', 'ngSanitize', 'angularMoment'])

.config(['$routeProvider', '$locationProvider', '$interpolateProvider', '$provide',
function($routeProvider, $locationProvider, $interpolateProvider, $provide) {
	$routeProvider.
        when('/test', {
            templateUrl: '/partials/test',
            controller: 'TestController'
        }).
        otherwise({
            redirectTo: function(){
                return '/test'
            }
        });

        $interpolateProvider.startSymbol('[[').endSymbol(']]');

    }
])