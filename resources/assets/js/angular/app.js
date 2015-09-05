var ceuSite = angular.module('ceu', ['ngRoute', 'ngSanitize', 'angularMoment'])

.config(['$routeProvider', '$locationProvider', '$interpolateProvider', '$provide',
function($routeProvider, $locationProvider, $interpolateProvider, $provide) {
	$routeProvider.
        when('/inicio', {
            templateUrl: '/partials/home',
            controller: 'HomeController'
        }).
        otherwise({
            redirectTo: function(){
                return '/inicio'
            }
        });

        $interpolateProvider.startSymbol('[[').endSymbol(']]');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }
])

.run(['$rootScope',  function($rootScope) {
    // see what's going on when the route tries to change
    $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
      // both newUrl and oldUrl are strings
      console.log('Starting to leave %s to go to %s', oldUrl, newUrl);
    });
}])


.run(['$rootScope', '$templateCache', function($rootScope, $templateCache) {
   $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
}])