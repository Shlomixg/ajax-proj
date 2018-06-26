'use strict';

console.log('--- Vanilla Ex ---');

function loadQuote() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
            var data = JSON.parse(httpRequest.responseText);
            renderQuote(data);
        }
    }
    httpRequest.open('GET', 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', true);
    httpRequest.send();
}


function renderQuote(data) {
    document.querySelector('.item blockquote p').innerText = data.quoteText;
    document.querySelector('.item blockquote cite').innerText = data.quoteAuthor;
    var elBlockquote = document.querySelector('.item blockquote');
    var colorClass = getBlockquoteColor();
    elBlockquote.className = `quote-card ${colorClass}`;
}

function getBlockquoteColor() {
    var colorsClasses = ['', 'blue-card', 'green-card', 'red-card', 'yellow-card'];
    var idx = getRandomIntInclusive(0, colorsClasses.length);
    return colorsClasses[idx];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}