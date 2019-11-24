(function() {
  "use strict";

  var module = angular.module("psMovies");

  function controller() {
    var model = this;

    model.$routerOnActivate = function(next) {
      model.id = next.params.id;
    };

    // model.goTo=function(id){
    //      model.$router.navigate(["Details",{id:id}])  //need add $router < binding in movielist .js
    // }
  }

  module.component("movieDetails", {
    templateUrl: "/ps-movies/movie-details.component.html",
    // $canActivate: function($timeout) {
    //   return $timeout(function(){
    //       return true;
    //   },2000)
    // },
    controllerAs: "model",
    controller: controller
  });
})();
