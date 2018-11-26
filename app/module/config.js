"use strict";

angular
    .module("App")
    .config(($routeProvider)=>{
        $routeProvider
            .when("/search", {
                template: `<search-criteria></search-criteria>`
            })
            .when("/favorites", {
                template:  `<favorites-page></favorites-page>`
            })
            .when("/recipes", {
                template: `<recipe-list></recipe-list>`
            })
            .otherwise({redirectTo:"/recipes"})
    });