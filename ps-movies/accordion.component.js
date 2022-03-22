(function () { 
    "use strict";

    var module = angular.module("psMovies");

    module.component("accordion", {
        transclude: true,
        template: "<div class='panel-group' ng-transclude></div>",
        controller: function () {
            var model = this;
            var panels = [];

            model.selectPanel = function (panel) {
                for (var i in panels) {
                    if (panel === panels[i]) {
                        panels[i].turnonoff();
                    } else {
                        panels[i].turnoff();
                    }
                }
            };

            model.addPanel = function (panel) {
                panels.push(panel);
                if (panels.length > 0) {
                   // panels[0].turnon();
                }
            }
        }
    });

    module.component("accordionPanel", {
        bindings: {
           "heading":"@"   
        },
        require: {
          "parent":"^accordion"   
        },
        controllerAs: "model",
        controller: function () {
            var model = this;
            model.selected = false;

            model.$onInit = function () {
                model.parent.addPanel(model);
            };

            model.turnonoff = function () {
                if (!model.selected)
                    model.selected = true;
                else if (model.selected)
                    model.selected = false;
            };

            model.turnoff = function () {
                model.selected = false;
            };

            model.select = function () {
                model.parent.selectPanel(model);
            }
            
        },
        transclude: true,
        template: "<div class='panel panel-default'>" +
            "<div class='panel panel-heading' ng-click='model.select()'>" +
            "<h4 class='panel-title'>{{model.heading}}</h4>" +
            "</div>" +
            "<div ng-if='model.selected' class='panel-body'  ng-transclude>" +
            "</div>" +
            "</div>"
    });

}())