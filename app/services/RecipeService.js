"use strict";

function RecipeService($http){
    const vm= this;

    vm.getResults = () =>{
        return {
            lists: vm.lists,
            ingredients: vm.ingredients
        }
    };

    vm.recipeSearch =(ingredients,remove,diet) =>{
            return $http({
                method:"GET",
                url:`https://api.edamam.com/search?q=${ingredients}&app_id=9806ed35&app_key=
                1daaafb1244e6632fdc33daa46a90e19&excluded=${remove}&diet=${diet}`
            }).then((response) => {
                vm.lists = response.data.hits;
                for (let i=0; i < vm.lists.length; i ++){
                    vm.ingredients = vm.lists[i].recipe.ingredientLines;
                }
                console.log(vm.lists)
                return vm.lists;
            })  
    }
              
};

    // vm.getRecipes = ()

//this empty array was built to store info from the api
//     vm.favoriteFoods = [];
// //Set and getters are used to carry info from component to component. 
//     vm.setFavorites=(newItem)=> {
//         vm.favoriteFoods.push(newItem);
//         console.log(vm.favoriteFoods);
//         return vm.favoriteFoods;

//     }
//     vm.getFavorites=()=> {
//         return vm.favoriteFoods;
//     }
    
// }



angular
    .module("App")
    .service("RecipeService", RecipeService);