const app = document.getElementById("app");

function render() {
    const route = location.hash;

    if (route === "#/home" || route === "") {
        app.innerHTML = homeView;
    } else if (route === "#/interests") {
        app.innerHTML = interestsView;
    } else if (route === "#/skills") {
        app.innerHTML = skillsView;
    }
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);