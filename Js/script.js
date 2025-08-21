// // alert("Hello world"); #Alert Box

// let h1 = document.getElementById("h1");
// function change(){
//     h1.style.backgroundColor = "red";
//     h1.style.padding = "1"
//     h1.style.justifyContent = "1"
//     h1.style.scale = "1"
//     h1.style.display = "home";
// }

function setDarkTheme(){
    document.documentElement.style.setProperty('--bg-color','black');
    document.documentElement.style.setProperty('--text-color','white');
}
   
function setLightTheme(){
    document.documentElement.style.setProperty('--bg-color','white');
    document.documentElement.style.setProperty('--text-color','black');
}