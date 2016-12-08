var h, Vo, t, g, year;
g = 9.8;
Vo = parseInt(prompt('Введите значение Vo',''));
t = parseInt(prompt('Введите значение t', ''));
h = (Vo * t)+(g * t * t / 2);
alert('ответ'+' '+h);
document.write(h);

year = parseInt(prompt('Введите ваш возраст',''));

if (year > 0 && year < 18) {
	alert("Спиртное категорически запрещено. Вы несовершеннолетний!");
}
else if ( year >= 18 && year <= 23) {
	alert('Разрешено в умеренном количестве');
}
else if (year < 40 || year < 60){
	alert ("Разрешено. Задумайтесь о Вашем здоровье")
}
else {
	alert("Неплохо, неплохо для ваших лет :)))!");
}

var operation = prompt('Введите операцию: /,*,-,+,%','');
var number1 = parseInt(prompt("Введите первое число",''));
var number2 = parseInt(prompt("Введите второе число",''));

switch (operation) {
	case "/":
		{
			res = number1 / number2;
			alert("Ответ"+ " " + res);
		};
		break;

	case "*":
		{
			res = number1 * number2;
			alert("Ответ"+ " " + res);
		};
		break;
	case "-":
		{
			res = number1 - number2;
			alert("Ответ"+ " " + res);
		};
		break;
	case "+":
		{
			res = number1 + number2;
			alert("Ответ"+ " " + res);
		};
		break;
	case "%":
		{
			res = number1 % number2;
			alert("Ответ"+ " " + res);
		};
		break;
	default:
		{
			alert("Вы ввели несуществующую операцию");
		};
}
