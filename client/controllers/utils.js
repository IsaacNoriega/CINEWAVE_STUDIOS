"use strict";

//const apiURL = 'http://localhost:3000/api/';
const apiURL='mongodb+srv://IsaacNoriega:IsaacNoriega@cluster0.ualxzre.mongodb.net/?retryWrites=true&w=majority/'
const moviesURL = apiURL + 'movies/';
const seriesURL = apiURL + 'series/';
const usersURL = apiURL + '';



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

function readMyWatching() {
    let Watching = JSON.parse(localStorage.getItem('Watching'));
    if (Watching === null) {
        Watching = [];
    }
    return Watching;
    //return new MediaContent(myList._mediaProxies);
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


function deleteFromWatching(media) {
    const watching = readMyWatching();

    for (let i = 0; i < watching.length; i++) {
        if (watching[i].media.title === media.title) {
            console.log("Pelicula encontrada");
            watching.splice(i, 1); // Remove the movie at index i
            localStorage.setItem("Watching", JSON.stringify(watching));
            
            setTimeout(() => {
                location.reload();
            }, 2000);
            return;
        }
    }

    console.log('Movie not found in the watching list');
}









function saveProgressMedia(media, progress) {
    // Get the current "Watching" array from localStorage
    let watchingArray = JSON.parse(localStorage.getItem("Watching")) || [];

    // Check if the media is already in the array based on its title
    const existingMediaIndex = watchingArray.findIndex(item => item.media.title === media.title);

    if (existingMediaIndex !== -1) {
        // If the media is already in the array, update its progress
        watchingArray[existingMediaIndex].progress = progress;
    } else {
        // If the media is not in the array, add it along with the progress
        watchingArray.push({ media, progress });
    }

    // Save the updated array back to localStorage
    localStorage.setItem("Watching", JSON.stringify(watchingArray));
}















function initMyNewProfile(username,img,profileInfo) {
    localStorage.setItem("profile",JSON.stringify(
        {
            id:username,
            img:img,
            info:JSON.parse(profileInfo)
        }
    ))
    let myNewList={
        "_mediaProxies":JSON.parse(localStorage.getItem("profile")).info._myList
    }
    writeMyList(myNewList)
    console.log(JSON.parse(profileInfo))
    console.log(myNewList)
    
}


function initProfile(){
    const user=JSON.parse(localStorage.getItem("profile"))
    const userProfileDiv=document.querySelector("#userProfileLink");

    console.log(user)

    userProfileDiv.innerHTML=`
    <img class="img-user" src="${user.img}">
        ${user.id}
    `

}



initProfile();
initMyList();