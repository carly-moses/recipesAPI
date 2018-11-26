"use strict";
//inputs and items displayed, but <search-criteria> in recipe list
const searchCriteria = {
    template: `
        <h1>Searchhh RESULTS!</h1>
        <a href=#!recipes>TAKE ME HOME!</a>
        <i class="material-icons">search</i>
        <section class="recipe" ng-repeat="recipe in $ctrl.recipes">
            <i class="material-icons">close</i>
            <p>{{ recipe.recipe.label }}</p>
            <i class="material-icons">star</i>
            <i class="material-icons">star_border</i>
            <p> Calories: {{ recipe.recipe.calories }}</p>
            <img ng-src="{{ recipe.recipe.image}}">
            <ul ng-repeat = "ingredient in $ctrl.ingredients track by $index">
                <li>{{ingredient}}</li>
            </ul>
            <p> See Full Recipe Here: {{ recipe.recipe.url }}</p>

        </section>
    `,

    controller: ["RecipeService", function(RecipeService){
        const vm = this;

        vm.recipes = RecipeService.getResults().lists;
        console.log(vm.recipes);

        vm.ingredients = RecipeService.getResults().ingredients;
        console.log(vm.ingredients);
    }]
}

angular
    .module("App")
    .component("searchCriteria", searchCriteria);