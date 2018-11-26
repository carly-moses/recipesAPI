"use strict";

//Display prepopulated recipes
//search criteria component created here
const recipeList = {
    template: `
        <h1>Recipe List Page</h1>
        <form ng-submit="$ctrl.submitRecipe($ctrl.ingredient, $ctrl.excludes, $ctrl.diet);">
            <input type="text" placeholder="Insert Ingredient" ng-model="$ctrl.ingredient">
            <input type="text" placeholder="Excludes" ng-model="$ctrl.excludes">
            <p>Select a diet:</p>
            <select ng-model="$ctrl.diet">
                <option value="balanced">Balanced
                <option value="high-protein">High Protein
                <option value="high-fiber">High Fiber
                <option value="low-fat">Low fat
                <option value="low-carb">Low Carb
            </select>
            <button>Search</button>
        </form>
    ` ,
    controller:["RecipeService", "$location", function(RecipeService, $location){
        const vm = this;

        vm.submitRecipe = (ingredient, excludes, diet)=>{
            // console.log(ingredient, excludes, diet);
            RecipeService.recipeSearch(ingredient, excludes, diet)
            .then((response)=>{
                // console.log(response);
                $location.path("/search");
            })
        }



    }]
}

angular
    .module("App")
    .component("recipeList", recipeList);