"use strict";

const movieContainer = document.getElementById('movieList');

async function movieToHtml(movie) {
    let newMovie=JSON.stringify(movie).replace(/\"/g,"&quot;")
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
        <button onlick="addToMyList(${newMovie})" class="add-btn">
            <img  src="../assets/add.svg">
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
/*
function renderMyListMovies() {
    moviesToHtml().then((movieHtmlArray) => {
        movieContainer.innerHTML = `<div class="row">\n${movieHtmlArray.join("\n")}\n</div>`;
    });
}*/
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
});