export {
    displayHomeContent
}

const contentDiv = document.getElementById('content');
const home = document.createElement('div');
home.setAttribute('id', 'home');

const restoName = document.createElement('h1');
restoName.setAttribute('id', 'restoName');
restoName.textContent = 'mukBang-Galore';

const restoInfo = document.createElement('h3');
restoInfo.setAttribute('id', 'restoInfo');
restoInfo.innerHTML = `<p>Come have a mukbangGalore in this<br>fusion style from Bangalore</p>`

home.appendChild(restoName);
home.appendChild(restoInfo);


function displayHomeContent() {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(home);
}