(function() {
  "use strict";

  var module = angular.module("psMovies");

  function buildEntry(value, max) {
    var entries = [];
    for (var i = 1; i <= max; i++) {
      var entry = i <= value ? "glyphicon-star" : "glyphicon-star-empty";
      entries.push(entry);
    }

    return entries;
  }

  module.component("movieRating", {
    templateUrl: "/ps-movies/movie-rating.component.html",
    bindings: {
      value: "<",
      max: "<"
    },
    controllerAs: "model",
    controller: function() {
      var model = this;

      model.$onInit = function() {
        model.entries = buildEntry(model.value, model.max);
      };
      model.$onChanges = function() {
        model.entries = buildEntry(model.value, model.max);
      };
    }
  });
})();
