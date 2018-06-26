'use strict';

console.log('--- Axios Ex ---');

function loadTeams() {
    var prm = axios.get('https://worldcup.sfg.io/teams/');
    prm.then(function(res) {
        renderTeams(res.data);
    });
}

function renderTeams(data) {
    var strHtmls = '';
    data.forEach(function(team) {
        strHtmls += `<span class="team" data-teamcode="${team.fifa_code}" onclick="loadTeamGames(this)">${team.country}</span> `;
    });
    document.querySelector('.item .teams').innerHTML = strHtmls;
}

function loadTeamGames(team) {
    var teamCode = team.getAttribute('data-teamcode');
    var prm = axios.get(`https://worldcup.sfg.io/matches/country?fifa_code=${teamCode}`);
    prm.then(function(res) {
        renderGames(res.data);
    });
}

function renderGames (data) {
    var strHtmls = '';
    data.forEach(function(game) {
        strHtmls += `
        <li>
            <span class="game">Location:</span> ${game.venue}, ${game.location}
        </li>
        `;
    });
    document.querySelector('.item .teams').innerHTML = strHtmls;
}