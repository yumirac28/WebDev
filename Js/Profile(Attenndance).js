let isDark = false;
let isChanged = false;

function toggleTheme() {
    const root = document.documentElement;
    if (!isDark) {
        root.style.setProperty('--primary-color', '#222');
        root.style.setProperty('--bg-color', '#111');
        root.style.setProperty('--text-color', '#f1f1f1');
    } else {
        root.style.setProperty('--primary-color', '#FF0000');
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
    }
    isDark = !isDark;
}

function changeTextAndBackground() {
    const heading = document.getElementById("profile-name");
    const bio = document.getElementById("profile-bio");

    if (!isChanged) {
        heading.textContent = "CB015621";
        bio.textContent = "This is my CB number used to identify my ID at campus.";
    } else {
        heading.textContent = "Yumira";
        bio.textContent = "This is my name that i use so everyone knows who i am.";
    }
    isChanged = !isChanged;
}
