export {
    loadHeader
}

const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');

const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
btn1.textContent = 'Home';
btn2.textContent = 'Menu';
btn3.textContent = 'About';
btn1.classList.add('nav-btn');
btn2.classList.add('nav-btn');
btn3.classList.add('nav-btn');
btn1.setAttribute('id', 'btn1');
btn2.setAttribute('id', 'btn2');
btn3.setAttribute('id', 'btn3');


function loadHeader() {
    nav1.appendChild(btn1);
    nav2.appendChild(btn2);
    nav3.appendChild(btn3);
}

