function createMenu() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.className = 'menu';

    const items = [
        createMenuItem('Feijoada', 'Black beans, Dried meat, Pork ear, Pork tail, Pork foot, Pork ribs, Pork loin, Paio, Portuguese sausage'),
        createMenuItem('Moqueca', 'Medium shrimp, Lemon juice, Palm oil, Medium onions, Cilantro, Parsley, Green onions, Tomatoes, Salt, Coconut milk'),
        createMenuItem('Acarajé', 'Cowpea, Onion, Salt, Palm oil, Chilli pepper, Shrimp'),
        createMenuItem('Baião de dois', 'Green bean, Paio, Broth, Onion, Garlic clove, Oil, Cilantro, Rice, Curd cheese'),
        createMenuItem('Carne de sol', 'Sun dried meat, Unsalted margarine, Manioc, Onion, Garlic cloves'),
        createMenuItem('Tacacá', 'Water, Sassava gum, Salt, Salted shrimp, Chicory leaves, Garlic cloves, Hot peppers, Bunches of jambu, Liters of tucupi'),
    ]

    items.forEach((a)=> {main.appendChild(a)})
}

function createMenuItem(name, ingre) {
    const div = document.createElement('div');
    div.classList.add('menu-item');

    const img = document.createElement('img');
    img.src = `./img/foods/${name.toLowerCase()}.jpg`;
    
    const h3 = document.createElement('h3');
    h3.innerHTML = name;

    const ingredients = document.createElement('p');
    ingredients.innerHTML = ingre;

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(ingredients);
    
    return div
}


export default createMenu