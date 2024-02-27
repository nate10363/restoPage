export {
    displayAboutContent
}

const contentDiv = document.getElementById('content');

const about = document.createElement('div');
const address = document.createElement('h4');
const phone = document.createElement('h4');
const callUsMsg = document.createElement('d');

about.setAttribute('id', 'about');
callUsMsg.setAttribute('id', 'callUsMsg');

address.textContent = '📍 6 Ringwood Rd Singapore 437401';
phone.textContent = '📞 +65 555 867-5309';
callUsMsg.innerHTML = 'Come visit us!!  maybe just to cheel?<br>Call us!!  we get lonely :/';

about.appendChild(address);
about.appendChild(phone);   
about.appendChild(callUsMsg)

function displayAboutContent() {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(about);
}