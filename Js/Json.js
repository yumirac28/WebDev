let student = {
    "name": "Yumira",
    "age": 16,
    "subjects": ["SSP", "SD", "Webdev"]
}

//Simple Json object
console.log(student.subjects[0]);
//strigify is from object -> string
let students2 = JSON.stringify(student);
console.log(students2);
//
let students3 = JSON.parse(students2);
console.log(students3.name);

let settings = {
    theme: "Dark",
    fontSize: "18px"
}

localStorage.setItem("userSettings",
    JSON.stringify(settings));

let saved = 
localStorage.getItem("userSettings");
console.log(JSON.parse(saved));