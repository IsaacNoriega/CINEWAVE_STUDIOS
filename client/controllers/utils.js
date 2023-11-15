"use strict";

const apiURL = 'http://localhost:3000/api/';
const moviesURL = apiURL + 'movies/';
const seriesURL = apiURL + 'series/';
const usersURL = apiURL + 'users/';



function initMyList() {
    if(sessionStorage.getItem('myList') == null) {
        let media = new MediaContent();
        writeMyList(media);
    }
}

function readMyList() {
    let myList = JSON.parse(sessionStorage.getItem('myList'));
    if (myList === undefined) {
        myList = [];
    }
    return new MediaContent(myList._mediaProxies);
}


function writeMyList(media) {
    sessionStorage.setItem('myList', JSON.stringify(media));
}


function addToMyList(media) {
    const myList = readMyList();

    // Verificar si el título del nuevo elemento ya existe en la lista
    let isDuplicate = false;
    for (const item of myList._mediaProxies) {
        if (item.title === media.title) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        myList._mediaProxies.push(media);
        writeMyList(myList);
    }
    renderMyList();
}

function deleteFromMyList(media) {
    const myList = readMyList();
    const updatedList = myList._mediaProxies.filter(m => m.title !== media.title);
    myList._mediaProxies = updatedList;
    writeMyList(myList);
    renderMyList();
}








initMyList();