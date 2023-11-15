"use strict";

const movieContainer = document.getElementById('movieList');
const myListContainer = document.getElementById('myListContainer');

async function movieToHtml(movie) {
    let newMovie=JSON.stringify(movie).replace(/\"/g,"&quot;")
    console.log(movie)
    return `
    <div class="movie-card">
        <div onclick="mostrarDetallePelicula(${newMovie})" class="img-card">
            <img class="card-img-top" src="${movie.img}" alt="${movie.title}">
        </div>
        <div class="card-body">
            <h4 class="card-title">${movie.title}</h4>
            <p class="card-text">${movie.director}</p>
            <p><span>${movie.year}</span></p>
        </div>
        <button onclick="addToMyList(${newMovie})" class="add-btn">
            <img  src="../assets/add.svg">
        </button>
    </div>
    `;
}

async function mediaMyListToHtml(movie) {
    let newMovie=JSON.stringify(movie).replace(/\"/g,"&quot;")
    console.log(movie)
    return `
    <div class="movie-card">
        <div onclick="mostrarDetallePelicula(${newMovie})" class="img-card">
            <img class="card-img-top" src="${movie.img}" alt="${movie.title}">
        </div>
        <div class="card-body">
            <h4 class="card-title">${movie.title}</h4>
            <p class="card-text">${movie.director}</p>
            <p><span>${movie.year}</span></p>
        </div>
        <button onclick="deleteFromMyList(${newMovie})" class="add-btn">
            <img  src="../assets/delete.svg">
        </button>
    </div>
    `;
}


async function moviesToHtml() {
    const movies = await loadMovies(moviesURL);

    const movieHtmlArray = movies.map(async (movie) => {
        const html = await movieToHtml(movie);
        return html;
    });

    return Promise.all(movieHtmlArray);
}

function renderMovies() {
    moviesToHtml().then((movieHtmlArray) => {
        movieContainer.innerHTML = `<div class="row">\n${movieHtmlArray.join("\n")}\n</div>`;
    });
}



async function mediasToHtml() {
    let medias=readMyList()._mediaProxies;
    const mediaHtmlArray = medias.map(async (media) => {
        const html = await mediaMyListToHtml(media);
        return html;
    });


    return Promise.all(mediaHtmlArray);
}


function renderMyList() {
    let medias=readMyList()._mediaProxies;
    console.log(medias)
    mediasToHtml().then((movieHtmlArray) => {
        myListContainer.innerHTML = `<div class="row">\n${movieHtmlArray.join("\n")}\n</div>`;
    });

}



/*
function renderByGenreMovies() {
    moviesToHtml().then((movieHtmlArray) => {
        movieContainer.innerHTML = `<div class="row">\n${movieHtmlArray.join("\n")}\n</div>`;
    });
}*/


function preloadStream() {
    renderMovies();
}

document.addEventListener('DOMContentLoaded', function() {
    preloadStream();
    renderMyList();
});