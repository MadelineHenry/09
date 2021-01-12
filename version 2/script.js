/* générer le tableau qui contient les infos des différentes cartes */
let collection = [
    {
        title: 'Hylas et les Nymphes',
        author: 'John william Waterhouse',
        category: ['Painting', 'Pre-Raphaelite'],
        link: 'https://manchesterartgallery.org/news/presenting-the-female-body-challenging-a-victorian-fantasy/',
        description:  'Is an oil on canvas produce in 1896 and kept at the Manchester Art Gallery. This painting speak about mythology : The abduction of hylas by the nymphs of the place who, enamoured of its beauty, carry it into the depths forever.'
    },{
        title: 'Un après-midi à la Grande Jatte',
        author: 'Georges Seurat',
        category: ['Painting', 'Nineteenth century'],
        link: 'https://www.artic.edu/artworks/27992/a-sunday-on-la-grande-jatte-1884',
        description:  'Is an oil on canvas produce in 1884 and kept in Art Institvte Chicago in Chicago. It is a painting inspired by research in optical and color theory, he juxtaposed tiny dabs of colors that, through optical blending, form a single and, he believed, more brilliantly luminous hue.'
      },{
          title: "l'empire des lumières",
        author: 'René Magritte',
        category: ['Painting', 'Surrealism'],
        link: 'https://www.fine-arts-museum.be/fr/la-collection/rene-magritte-l-empire-des-lumieres',
        description:  'Is an oil on canvas produce in 1954 and kept in the Royal Museums of Fine-Arts of Belgium. The paintings depict the paradoxical image of a road at night? illuminated by a single lamp post, under a daytime sky.'
    },{
        title: 'Les Sabines',
        author: 'Jacques-Louis David',
        category: ['Painting', 'Neo-classicism'],
        link: 'https://www.louvre.fr/oeuvre-notices/les-sabines',
        description:  'Is an oil on canvas produce in 1799 and kept at the Louvre Museum in Paris. This painting represents the reconciliation of the French after the Revolution inspared by Geek Antiquity.'
    },{
        title: 'La jeune fille à la perle',
        author: 'Johannes Vermeers',
        category: ['Painting', 'Dutch Golden Century'],
        link: 'https://www.beauxarts.com/vu/la-jeune-fille-a-la-perle-de-vermeer-un-regard-pour-leternite/',
        description:  'Is an oil on canvas produce in 1665 and kept in Mauristhuis, La Haye in the Netherlands. It is a mysterious painting : nothing is known about the origins of the order or the identity of the model. The novelist Tracy Chevalier has anchored in the imagination the idea that the teenage girl was a servant of the master, but specialists lean rather, without certainty, on the hypothesis of a daughter of the latter.'
    },{
        title: 'Las Meninas',
        author: 'Diego Velasquez',
        category: ['Painting', 'Baroque'],
        link: 'https://www.larousse.fr/encyclopedie/images/Diego_V%C3%A9lasquez_les_M%C3%A9nines/1313946',
        description:  'Is an oil on canvas produce in 1954 and kept in Museum of Prado of Spain. The complex and enigmatic composition of the canvas questions the link between reality and illusion and creates an uncertain relationship between the viewer and the characters depicted on the canvas.'
    },{
        title: 'Ophelia',
        author: 'Sir John Everett Millais',
        category: ['Painting', 'Neo-classicism'],
        link: 'https://www.tate.org.uk/art/artworks/millais-ophelia-n01506',
        description:  "Is an oil on canvas produce in 1840 and kept at the Tate Museum in London. This painting represents the scene depicted is from Shakespeare's Hamlet, Act IV, Scene vii, in which Ophelia, driven out of her mind when her father is murdered by her lover Hamlet, falls into a stream and drowns."
    },{
        title: 'Nightlife',
        author: 'Archibald John Motley Jr.',
        category: ['Painting', 'Renaissance of Harler', 'Art deco'],
        link: 'https://www.artic.edu/artworks/117266/nightlife',
        description:  'Is an oil on canvas produce in 1943 and kept in Art Institvte Chicago in Chicago. This painting is a representation of the vibrancy of African American culture, frequently portraying young, sophisticated city dwellers out on the town. Nightlife depicts a crowded cabaret in the South Side neighborhood of Bronzeville, with people seated around tables and at the bar.'
    },{
        title: "Les hasards heureux de l'escarpolette",
        author: 'Jean Honoré Fragonard',
        category: ['Painting', 'Rococo'],
        link: 'https://www.larousse.fr/encyclopedie/oeuvre/les_Hasards_heureux_de_lescarpolette/181314',
        description:  'Is an oil on canvas produce in 1767 and kept in Wallace collection in London. It is a commission from the Baron de Saint-Julien: "I would like [...] for you to paint Madame (showing me her mistress) on an escarpolette that a bishop would set in motion".'
    },{
        title: 'Haven',
        author: 'Vladimir Kush',
        category: ['Painting', 'Surrealism'],
        link: 'https://vladimirkush.com/haven',
        description:  'Is an oil on canvas produce in 1943 and kept in Art Institvte Chicago in Chicago. This painting is a representation of the myths : before the beginning of time, heaven and earth were united in a single whole – this could be an egg or a shell. Some power (God?) created heaven (the top half of the shell) and the earth and sea (the bottom half).'
    }]

let cardContainer;

//CREATE CARDS


const createCard = (task) => {
    const card = document.createElement('div');
    card.className = 'card';
    const img_container = document.createElement('div');
    img_container.className = 'img-container';
    