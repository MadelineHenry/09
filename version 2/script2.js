document.body.querySelector('body');

/* générer la bannière profil */
const bannerProfil = creatElement('div')
bannerProfil.className = 'bannerProfil';
document.body.appendChild(bannerProfil);

/* générer l'image de la bannière */
const bannerProfil_picture = creatElement('img');
bannerProfil_picture.className = 'bannerProfil_picture';
bannerProfil.appendChild(bannerProfil_picture);
bannerProfil_picture.src = './img/profil.png';
bannerProfil_picture.alt = 'profil_picture';

/* générer la description titre et paragraphe */
const bannerProfil_description = creatElement('div');
bannerProfil_description.className = 'bannerProfil_description';
bannerProfil.appendChild(bannerProfil_description);

const bannerProfil_description_title = creatElement('h1');
bannerProfil_description_title.className = 'bannerProfil_description_title';
bannerProfil_description_title.textContent = "Madeline Henry's Collection";
bannerProfil.appendChild(bannerProfil_description_title);

const bannerProfil_description_text = creatElement('p');
bannerProfil_description_text = ''
bannerProfil_description_text.textContent = "When I was an art student I had a course in art history, this course fascinated me. I loved learning more techniques, discovering different artists and their personal styles. Here are some of my favourite works of art through the ages. They all tell a story, they can be grouped by current, sometimes by style or by theme but they are all unique thanks to the sensibility of each artist."
bannerProfil.appendChild('bannerProfil_description_text');

/* générer la partie contener qui contient les différentes cartes */
const container = creatElement('div');
container.className = 'container';
document.body.appendChild(container);

const cards = creatElement('div');
cards.className = 'cards';
container.appendChild(cards);