export {
    displayMenuContent
}

// import Tikka from './tikka.png'

// const tikkaImg = new Image();
// tikkaImg.src = Tikka;
// tikkaImg.setAttribute('id', 'tikka');

const menuArr = [
    ['Chicken Tikka', 'tikka', 9.95],
    ['Paneer Biryani', 'biryani', 7.95],
    ['Chana Kofta', 'kofta', 7.95],
]

const contentDiv = document.getElementById('content');
const menu = document.createElement('div');
const menuItem = document.createElement('div');
const menuDescription = document.createElement('h3');
menuDescription.innerHTML = 'We are a specialty restaurant that absolutely specializes<br>in these three dishes to give you the best<br>Bangalore experience of your life';

const mapMenu = () => menuArr.map((el) => {
    menu.innerHTML += `
        <div class="menu-item" id="${el[1]}>
            <p class="item-name">${el[0]}</p>
            <p class="item-price">${el[2]}</p>
            <button class="add-cart">Add to Cart</button>
        </div>
    `
});

mapMenu();

menu.setAttribute('id', 'menu');
menuDescription.setAttribute('id', 'menuDescription');
menuItem.classList.add('menu-item');

function displayMenuContent() {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(menuDescription)
    contentDiv.appendChild(menu);
}