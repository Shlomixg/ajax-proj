'use strict';

console.log('--- Fetch Ex ---');

function showContactsList() {
    var prm = fetch('http://www.filltext.com/?rows=12&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone|format%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&zip=%7bzip%7d&pretty=true');
    prm.then(function(res) {
        var prmJson = res.json();
        prmJson.then(function(data) {
            renderContactsList(data);
            document.querySelector('.btn-contacts').innerText = 'Reload List';
        });
    });
}

function renderContactsList(data) {
    var strHtmls = '';
    data.forEach(function(contact) {
        strHtmls += `
        <li>
            <span>Name:</span> ${contact.fname} ${contact.lname},
            <span>Tel:</span> ${contact.tel},
            <span>Address:</span> ${contact.address},
            <span>City:</span> ${contact.city},
            <span>ZIP:</span> ${contact.zip}
        </li>`;
    });
    document.querySelector('.contacts-list').innerHTML = strHtmls;

}