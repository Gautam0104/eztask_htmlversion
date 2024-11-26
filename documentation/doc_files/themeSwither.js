function switchTheme() {
    var themeSwicher = document.getElementById("theme");
    if (themeSwicher.className = "dark") {

        themeSwicher.classList.remove("dark");
        themeSwicher.classList.add("light")
    }

}
function switchTheme2() {
    var themeSwicher = document.getElementById("theme");
    if (themeSwicher.className = "light") {

        themeSwicher.classList.remove("light");
        themeSwicher.classList.add("dark")
    }

}