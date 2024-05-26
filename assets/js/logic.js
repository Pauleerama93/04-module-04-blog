const themeButton = document.querySelector(".toggle")

const getTheme = function() {
    const theme = localStorage.getItem("theme") || "dark";

    return theme;
}

const readBlogDataFromLocalStorage = function() {
    const stringData = localStorage.getItem("blogs");

    const data = JSON.parse(stringData);

    return data || [];
}

const applyTheme = function(theme) {
    let icon, circleColor;

    if(theme === "light") {
        icon = "🔥";
        circleColor = "Orange";
    } else{ 
        icon = "🌊";
        circleColor = "rgb(18, 72, 190)";
    }

    themeButton.textContent = icon;
    document.body.classList = theme;
    document.documentElement.style.setProperty("--circle-color", circleColor)
}

const saveTheme = function(theme) {
    localStorage.setItem("theme", theme);
}

const themeSwitch = function(){
    const theme = getTheme();

    let newTheme;

    if (theme === "dark"){
        newTheme = "light";
    } else{
        newTheme ="dark";
    }

    applyTheme(newTheme);

    saveTheme(newTheme);
}

applyTheme(getTheme());

themeButton.addEventListener("click", themeSwitch);

