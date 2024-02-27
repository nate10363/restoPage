import _ from 'lodash';
import './style.css';
import Logo from './bangDark.png';
// import Tikka from './tikka.png'
import {loadHeader, btn1, btn2, btn3} from './load_header';
import {displayHomeContent} from './load_home_content';
import {displayMenuContent} from './load_menu_content'
import {displayAboutContent} from './load_about_content';

const contentDiv = document.getElementById('content');

const myIcon = new Image();
myIcon.src = Logo;
myIcon.classList.add('logoImg');

// const tikkaImg = new Image();
// tikkaImg.src = Tikka;
// tikkaImg.setAttribute('id', 'tikka');




loadHeader();
displayHomeContent();

btn1.addEventListener('click', () => {
    btn2.classList.remove('check-btn');
    btn3.classList.remove('check-btn');
    btn1.classList.add('check-btn');
    displayHomeContent();
});

btn2.addEventListener('click', () => {
    btn1.classList.remove('check-btn');
    btn3.classList.remove('check-btn');
    btn2.classList.add('check-btn');
    // contentDiv.appendChild(tikkaImg);
    displayMenuContent();
});

btn3.addEventListener('click', () => {
    btn1.classList.remove('check-btn');
    btn2.classList.remove('check-btn');
    btn3.classList.add('check-btn')
    displayAboutContent();
});

// const contentDivNew = document.getElementById('content');
