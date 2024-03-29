'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/Login.html', controller: 'HomeCtrl'});
             
        $routeProvider.when('/view0', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
             
        $routeProvider.when('/view9', {templateUrl: 'partials/step1.html', controller: 'HomeCtrl'});
    
        $routeProvider.when('/view1', {templateUrl: 'partials/notificationView.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/geolocationView.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/accelerometerView.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/deviceInfoView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/view5', {templateUrl: 'partials/cameraView.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/contactsView.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/compassView.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/hackerNewsView.html'});
             
        $routeProvider.when('/view8', {templateUrl: 'partials/hackerNewsView.html'});
        $routeProvider.otherwise({redirectTo: '/'});
  }]);
