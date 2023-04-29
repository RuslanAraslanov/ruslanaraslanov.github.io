var myImage = document.querySelector('img'); //Захват элемента документа

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src'); //Получение аттрибута элемента
    if(mySrc === 'images/logotype.png') {
        myImage.setAttribute('src', 'images/atkinson.png'); //Установка значения аттрибута элемента
    } else {
        myImage.setAttribute('src', 'images/logotype.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Введите имя.'); //prompt вызывает диалоговое окно
    localStorage.setItem('name', myName); //localStorage - API, который позволяет хранить данные в браузере
    myHeading.textContent = 'Привет, ' + myName;
}

if(!localStorage.getItem('name')) { //Проверка есть ли данные в 'name'
    setUserName(); //Если нет запускает функцию получения данных
} else {
    var storedName = localStorage.getItem('name');//Извлекаем существующие данные
    myHeading.textContent = 'Привет, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}