import '../dist/style.css'
import createHome from './home'
import createMenu from './menu';
import createContact from './contact';

function createHeader() {
    const header = document.createElement('header');

    const title = document.createElement('h1');
    title.id = 'mainTitle';
    title.innerHTML = 'Muçar';

    header.appendChild(title);
    header.appendChild(createNav())
    return header
}

function createNav() {
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-item');
    homeButton.classList.add('active');
    homeButton.innerHTML = 'Home';
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        toggleMenuButton(homeButton);
        createHome();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-item');
    menuButton.innerHTML = 'Menu';
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        toggleMenuButton(menuButton);
        createMenu();
    });

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-item');
    contactButton.innerHTML = 'Contact';
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        toggleMenuButton(contactButton);
        createContact();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav
}   

function toggleMenuButton(button) {
  const buttons = document.querySelectorAll(".nav-item");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");

}

function createMain() {
    const main = document.createElement('main');
    return main
}

function createFooter() {
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.innerHTML = 'Copyright © ' + new Date().getFullYear() + ' PedroRub1';
    const a = document.createElement('a');
    a.href = 'https://github.com/PedroRub1';
    const img = document.createElement('img')
    a.appendChild(img)

    footer.appendChild(p);
    footer.appendChild(a);
    
    return footer
}



function createSite() {
    const content = document.querySelector('#content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    createHome()
}

export default createSite