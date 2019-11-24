(function() {
  "use strict";

  var module = angular.module("psMovies", ["ngComponentRouter"]);

 

  // module.config(function($locationProvider) {
  //   $locationProvider.html5Mode(true);
  // });

   module.value("$routerRootComponent", "movieApp");
  module.component("appAbout", {
    template: "This is the about page"
  });
})();
