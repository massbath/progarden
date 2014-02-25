/**
 * 
 */

var configRouteProvider = function($routeProvider) {
	$routeProvider.when('/resume', {
		templateUrl : 'resources/html/resume.html'
	}).when('/gallery', {
		templateUrl : 'resources/html/gallery.html',
		controller : 'galleryCtrl'
	}).when('/contact', {
		templateUrl : 'resources/html/contact.html',
		controller : 'contactCtrl'
	}).when('/metiers', {
		templateUrl : 'resources/html/metier.html',
	}).otherwise({
		redirectTo : 'resume'
	});
};
