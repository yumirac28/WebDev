document.getElementById("MyInput")
.addEventListener("keyup", function (){
    document.getElementById("output").innerHTML = this.value;
})

document.getElementById("box")
.addEventListener("mouseover", function(){
    this.style.background = "green";
});

document.getElementById("box")
.addEventListener("mouseout", function(){
    this.style.background = "blue";
});

document.getElementById("p1")
.addEventListener("dblclick", function(){
    this.style.color = "red";
    this.style.backgroundColor = "black";
})

document.getElementById("email")
.addEventListener("focus", function(){
    this.style.border= "3px solid red";
});

document.getElementById("email")
.addEventListener("blur", function(){
    this.style.border = "1.5px solid black";
});