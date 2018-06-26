'use strict';

console.log('--- Axios Ex ---');

function loadAnswer() {
    var prm = axios.get('https://yesno.wtf/api');
    prm.then(function(res) {
        renderAnswer(res.data);
        if (res.data.answer === 'yes') {
            renderJoke();
        } else {
            renderDog();
        }
    });
}

function renderAnswer(data) {
    document.querySelector('.item .answer').innerHTML = data.answer;
    document.querySelector('.item .answer-img').src = data.image;
}

function renderJoke() {
    axios.get('http://api.icndb.com/jokes/random').then(function(res) {
        document.querySelector('.bonus').innerHTML = res.data.value.joke;
        document.querySelector('.bonus-dog').src = '';
    });
}

function renderDog() {
    axios.get('https://dog.ceo/api/breeds/image/random').then(function(res) {
        document.querySelector('.bonus-dog').src = res.data.message;
        document.querySelector('.bonus').innerHTML = '';
    });
}