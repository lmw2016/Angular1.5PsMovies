(function() {
  "use strict";

  var module = angular.module("psMovies");

  function fetchMovieById($http) {
    return $http.get("/movies.json").then(function (res) {
      return (res.data);
    })
  }
  function controller($http) {
    var model = this;

    model.$routerOnActivate = function(next) {
      model.id = next.params.id;
    };

    model.$onInit = function () {
      fetchMovieById($http).then(function (movies) {
        model.movie = movies[model.id-1];
      })
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
    controller:['$http', controller]
  });
})();
