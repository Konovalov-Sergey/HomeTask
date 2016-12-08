var person = {
    name: '',
    sname: '',
    age: '',
    lang: [],
}
var arr = [];
var repeater;

function ask() {
    var confirm;
    do {
        person ={
            name: prompt('Введите имя'),
            sname: prompt('Введите фамилию'),
            age: +prompt('Введите возвраст'),
            lang: prompt("Введите языки программирования").split(" "),
        }
            arr.push(person);
            confirm = prompt("Пройти заполнение еще раз?");
    } while (confirm == false);
};
function say() {
    for (var i = 0; i < arr.length; i++ ) {
        document.write("Имя: " + arr[i].name + "<br />");
        document.write("Фамилия: " + arr[i].sname + "<br />");
        document.write("Возраст: " + arr[i].age + "<br />");
        document.write("Язык программирования: " + arr[i].lang + "<br />" )
        document.write("<br />");
    };
};
 ask();
 say();
for ( var i = 0; i < arr.length; i++ ) {
    for (item in arr[i]) {
        console.log(arr[i][item]);
    }
    console.log('\n')
}