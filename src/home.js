import createContact from "./contact";

function createHome() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.classList = 'home';
    main.appendChild(createTitle());
    main.appendChild(createSubtitle());
    main.appendChild(createContactBtn());
}

function createTitle() {
    const h1 = document.createElement('h1');
    h1.classList.add('home-title');
    h1.innerHTML = 'The best food in the world';
    return h1
}

function createSubtitle() {
    const h2 = document.createElement('h2');
    h2.classList.add('home-subtitle');
    h2.innerHTML = 'Only in Brazil, contact us';
    return h2
}

function createContactBtn() {
    const btn = document.createElement('button');
    btn.classList.add('home-contact-btn');
    btn.innerHTML = 'Contact';
    btn.onclick = () => {
        const buttons = document.querySelectorAll(".nav-item");
        buttons[2].classList.add('active');
        buttons[0].classList.remove('active');
        
        const main = document.querySelector('main');
        main.className = 'contact';

        createContact()
    }

    return btn
}

export default createHome