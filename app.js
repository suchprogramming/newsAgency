var newsApp = angular.module('newsApp', ['ui.router']);

newsApp.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('beats', {
    url: "/beats",
    templateUrl: "partials/beats.html",
    controller: 'BeatsCtrl'
  });

});