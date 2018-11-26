"use strict";

//This page will display all of your favorite recipes!

const favoritesPage = {
    template:  `
        <h1>Favorites Page</h1>
    `
}

angular
    .module("App")
    .component("favoritesPage", favoritesPage)