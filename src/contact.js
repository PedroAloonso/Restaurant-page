function createContact() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.className = 'contact';

    main.appendChild(createPhone());
    main.appendChild(createMap());

}

function createPhone() {
    const phone = document.createElement('h2');
    phone.classList.add('contact-phone');
    phone.innerHTML = ': (0) 1 2345-6789';

    return phone
}

function createMap() {
    const map = document.createElement('img');
    map.src = './img/map.JPG';
    map.classList.add('contact-map');

    return map
}


export default createContact