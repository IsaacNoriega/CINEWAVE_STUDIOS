const userContainer = document.getElementById('myProfiles');

async function userToHtml(user) {
    const profileKeys = Object.keys(user.profiles || {});

    const profileHtmlArray = profileKeys.map((profileKey) => {
        const profile = user.profiles[profileKey];
        return `
            <div class="profile-n">
                <button onclick="goHome()">
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
