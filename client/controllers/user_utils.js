const userContainer = document.getElementById('myProfiles');


const logProfile = (name,img) => {
    console.log(name);
    console.log(img)
    initMyNewProfile(name,img)
};




async function userToHtml(user) {
    const profileKeys = Object.keys(user.profiles || {});

    const profileHtmlArray = profileKeys.map((profileKey) => {
        const profile = user.profiles[profileKey];
        return `
            <div class="profile-n">
                <button onclick="logProfile('${profileKey}' , '${profile._imagen}')">
                    <img src="${profile._imagen}" alt="">
                    <p>${profileKey}</p>
                </button>
            </div>
        `;
    });

    return profileHtmlArray.join('');
}


function renderUsers() {
    usersToHtml().then((userHtmlArray) => {
        userContainer.innerHTML = userHtmlArray.join('');
    });
}

async function usersToHtml() {
    const users = await loadUser(usersURL);
    const userHtmlArray = users.map(async (user) => {
        const html = await userToHtml(user);
        return html;
    });

    return Promise.all(userHtmlArray);
}

document.addEventListener('DOMContentLoaded', function() {
    renderUsers();
});
