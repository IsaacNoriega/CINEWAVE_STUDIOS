"use strict";

const apiURL = 'http://localhost:3000/api/';
const moviesURL = apiURL + 'movies/';
const seriesURL = apiURL + 'series/';
const usersURL = apiURL + 'users/';



function initMovies() {
    console.log("peliculas")
}

function readMyList() {
    let myList = JSON.parse(sessionStorage.getItem('myList'));
    if(myList._productProxies === undefined) {cart._productProxies = []}
    return new ShoppingCart(cart._products, cart._productProxies);
}


function writeMyList(movie) {
    sessionStorage.setItem('myList', JSON.stringify(movie));
}


initMovies();