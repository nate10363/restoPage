import _ from 'lodash';
import './style.css';
import Logo from './bangDark.png';
import {loadHeader} from './load_open_screen';
import {displayHomeContent, contentDiv} from './load_home_content';

const myIcon = new Image();
myIcon.src = Logo;
myIcon.classList.add('logoImg');




loadHeader();
displayHomeContent();

btn1.addEventListener('click', displayHomeContent);
btn2.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(myBMLogo);
})
btn3.addEventListener('click', () => {
    console.log('this is button 3 and three')
})

// const contentDivNew = document.getElementById('content');
