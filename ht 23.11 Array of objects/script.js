
var person = {
    name: '',
    sname: '',
    age: '',
    lang: [],
};
var arr = [{
	name: 'Sergey',
	sname: 'Konovalov',
	age: '31',
	lang: ['js', 'html', 'css', 'php'],
},
{
	name: 'Anton',
	sname: 'Isaevskiy',
	age: '31',
	lang: ['html', 'css', 'php'],
},
{
	name: 'Maksim',
	sname: 'Zhelaga',
	age: '29',
	lang: ['php', 'SQL'],
}];

function ask() {
    var confirm;
    do {
        person = {
            name: prompt('Введите имя'),
            sname: prompt('Введите фамилию'),
            age: +prompt('Введите возраст'),
            lang: prompt("Введите языки программирования").split(" "),
        }
            arr.push(person);
            confirm = prompt("Пройти заполнение еще раз?");
    } while (confirm == false);
}
function delName() {
    var name = prompt("Введите имя человека, которого хотите удалить");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name == name) {
            arr.splice(i, 1);
        }
    }
    say();
}

function delIndex() {
    var indexArray
        indexArray = +prompt('Введите индекс человека, которого хотите удалить') - 1;
        arr.splice(indexArray, 1);
    say();
}
function compareName() {
    arr.sort( function(a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    });
    say();
}
function compareAge() {
    arr.sort( function(a, b) {return a.age - b.age});
    say();
}
function compareLang() {
    arr.sort( function(a, b) {return b.lang.length - a.lang.length});
    say();
}
function say() {
    var paragraph = document.getElementById("output");
    
    paragraph.innerHTML = ''; //очистка поля вывода

    paragraph.innerHTML = 
         '<tr>' +
            '<th>' + "Имя: " + '</th>' +
            '<th>' + "Фамилия: " + '</th>' +
            '<th>' + "Возраст: " + '</th>' +
            '<th>' + "Язык программирования" +'</th>' +
        '</tr>';
      for (var i = 0; i < arr.length; i++ ) {
        // paragraph.innerHTML += "\n<br> Имя: " + arr[i].name + "<br />" +
        //                         "Фамилия: " + arr[i].sname + "<br />" +
        //                         "Возраст: " + arr[i].age + "<br />" +
        //                         "Язык программирования: " + arr[i].lang + "<br />";
         // paragraph.innerHTML += '<tr>' + '<td>' + "Имя: " + '</td>' + '<td>' + arr[i].name + '</td>' +'</tr>' +
         //                        '<tr>' + '<td>' + "Фамилия: " + '</td>' + '<td>' + arr[i].sname + '</td>' +'</tr>' +
         //                        '<tr>' + '<td>' + "Возраст: " + '</td>' + '<td>' + arr[i].age + '</td>' +'</tr>' +
         //                        '<tr>' + '<td>' + "Язык программирования: " + '</td>' + '<td>' + arr[i].lang + '</td>' +'</tr>';
        paragraph.innerHTML += 
        '<tr>' +
            '<td>' + arr[i].name + '</td>' +
            '<td>' + arr[i].sname + '</td>' +
            '<td>' + arr[i].age + '</td>' +
            '<td>' + arr[i].lang + '</td>' +
        '</tr>' 
    }
}

function refresh() {
   window.location.reload(false); 
}

for (var i = 0; i < arr.length; i++) {
	for (var item in arr[i]) {
		console.log(arr[i][item]);
	}
	console.log('\n');
}