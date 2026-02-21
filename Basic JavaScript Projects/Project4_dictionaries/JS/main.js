function my_Dictionary() {
var Animal = {
Species:"Fish",
Color:"Green",
Breed:"Guppy",
Age:2,
Sound:"Burp!"
};
document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_Dictionary() {
var Person = {
name:"Hiba",
age:20,
name:"Jenny" // Duplicate key
};
document.getElementById("Dictionary").innerHTML = Person.name;
}

console.log(my_Dictionary);
console.log(my_Dictionary.name);

function my_Dictionary() {
var Animal = {
Species:"Fish",
Color:"Green",
Breed:"Guppy",
Age:2,
Sound:"Burp!"
};
delete Animal.Sound;
document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
