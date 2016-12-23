function createBarChart(data, width, height, color) {

    // создаем контейнер для диаграммы
    var chart = document.createElement("div");

    chart.style.width = width + "px";
    chart.style.height = height + "px";
    chart.style.position = "relative";
    chart.style.border = '2px solid black';
    chart.style.transform = 'rotate(90deg)';
    chart.style.margin = '200px';

    
    // находим максимальное значение в массиве данных

    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < data.length; i++) {
        if (max < data[i]) 
            max = data[i];
    }

    var scale = height / max;
    var barWidth = Math.floor(width / data.length);


    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum += data[i];
    }

    // создаем отдельный элемент диаграммы
    for (var i = 0; i < data.length; i++) {
       
       var bar = document.createElement("div");
        
        bar.style.height = data[i] * scale + "px";
        bar.style.width = barWidth - 4 + "px";
        bar.style.position = "absolute";
        //bar.style.transform = "rotate(90deg)";
        bar.style.margin = "4px";
        bar.style.bottom = "0px";
        bar.style.left = barWidth * i + "px";

        bar.style.backgroundColor = color;

        bar.innerHTML = Math.floor(data[i]/sum*100) + "%" + "share";
        chart.appendChild(bar);
       
    }

    return chart;
}