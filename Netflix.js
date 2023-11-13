"use strict";

class MoviesException{
    constructor(errorMessage) {
        return this.errorMesaage = errorMessage;
    }
}

class SerieException{
    constructor(errorMessage) {
        return this.errorMesaage = errorMessage;
    }
}

class MediaContentException{
    constructor(errorMesaage){
        return thus.errorMesaage = errorMesaage;
    }
}



class NetflixContent {
    constructor() {
        this._series = [];
        this._movies = [];
        this._category = [];
        this._myList = [];
    }

    // Agrega una película a la lista de películas
    addMovie(title, rating, releaseYear, classification, genre, synopsis, movieSpecificProperty) {
        const movie = new Movie(title, rating, releaseYear, classification, genre, synopsis, movieSpecificProperty);
        this._movies.push(movie);
    }

    // Agrega una serie a la lista de series
    addSeries(title, rating, releaseYear, classification, genre, synopsis, seriesSpecificProperty) {
        const series = new Series(title, rating, releaseYear, classification, genre, synopsis, seriesSpecificProperty);
        this._series.push(series);
    }

    // Agrega contenido a la lista de favoritos
    addToMyList(mediaContent) {
        this._myList.push(mediaContent);
    }
}

/**Clase general para Movies y Series**/
class MediaContent {
    constructor(title, rating, releaseYear, classification, genre, synopsis) {
        this._title = title;
        this._rating = rating;
        this._releaseYear = releaseYear;
        this._classification = classification;
        this._genre = genre;
        this._synopsis = synopsis;
    }

    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value !== 'string') {
            throw new MediaContentException('Input is not correctly');
        }
        this._title = value;
    }

    get rating() {
        return this._rating;
    }
    set rating(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new MediaContentException('Input is not correctly or it cant be lower than 0');
        }
        this._rating = value;
    }

    get releaseYear() {
        return this._releaseYear;
    }
    set releaseYear(value) {
        let date = new Date();
        let year = date.getFullYear();
        if (typeof value !== 'number' || value < 1985 || value > year) {
            throw new MediaContentException('Input is not correctly or is out-of range');
        }
        this._releaseYear = value;
    }

    get classification() {
        return this._classification;
    }
    set classification(value) {
        if (!Array.isArray(value)) {
            throw new MediaContentException('Input is not correctly');
        }
        this._classification = value;
    }

    get genre() {
        return this._genre;
    }
    set genre(value) {
        if (!Array.isArray(value)) {
            throw new MediaContentException('Input is not correctly');
        }
        this._genre = value;
    }

    get synopsis() {
        return this._synopsis;
    }
    set synopsis(value) {
        if (typeof value !== 'string') {
            throw new MediaContentException('Input is not correctly');
        }
        this._synopsis = value;
    }
}

class Movie extends MediaContent {
    // Puedes agregar propiedades y métodos específicos de películas si es necesario
}

class Series extends MediaContent {
    // Puedes agregar propiedades y métodos específicos de series si es necesario
}   