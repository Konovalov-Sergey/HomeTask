document.write("Array" + "<br/>");
var arr = Array(11);
// создание масива рандом
for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.floor((Math.random() * 100) + 1);
   // arr[i] = i+1;
   document.write(arr[i] + " ");
}
// сортировка
document.write("<br/>")
arr.sort(function(a, b){return a-b});
document.write(arr.join(" ") + " - " + "Сортировка от А до Я" + "<br/>" );

// реверс массива
for (var i = 1; i <= Math.floor(arr.length / 2); i++) {
	var j = arr[i - 1];
	var l = arr.length;
	arr[i - 1] = arr[l - i];
	arr[l - i] = j;
}
document.write(arr.join(" ") + " - " + "Реверс массива" + "<br/>" );

// добавление элементов
var person = new Object();
var a = new Array();
// var name;
// var sname;
// var age;

function ask() {
    person.name = prompt("Введите свое имя:");
    person.sname = prompt("Введите свою фамилию:");
    person.age = prompt("Введите свой возраст:");
}


function say() {
    document.write("Имя: " + person.name + "<br />");
    document.write("Фамилия: " + person.sname + "<br />");
    document.write("Возраст: " + person.age + "<br />");
    document.write("<hr/>");
}

do {
    ask();
    say();
    a.push(person);
    var repeater = confirm("Пройти заполнение еще раз?");
} while (repeater);

// document.write(a.join("<br/>"));