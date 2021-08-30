const btnHome = document.getElementById('homeBtn');
const btnRegister = document.getElementById('regBtn');
const cardsContainer = document.getElementById('cardsContainer');
const cardsMain = document.getElementById('cardsMain');
const titleName = document.getElementById('titleName');
const titleImg = document.getElementById('titleImg');
const cardLink = document.getElementById('cardLink');
const detailsUrl = document.getElementById('detailsUrl');
const cardFragment = document.createDocumentFragment();

// array con titulos
let movieTitles = [
    {
        title: "Fast and Furious 9",
        img: "ff9.png",
        score: 5,
        id: "ff9",
        sinopsis: "Dom Toretto vive una vida tranquila junto a Letty y su hijo, pero el peligro siempre regresa a su vida. En esta ocasión, el equipo se enfrenta a un complot mundial orquestado por el asesino más temible del mundo: el hermano de Dom."
    },
    {
        title: "Avatar",
        img: "avt.png",
        score: 8,
        id: "avt"
    },
    {
        title: "Black Widow",
        img: "bw.png",
        score: 5,
        id: "bw"
    },
    {
        title: "Inception",
        img: "inc.png",
        score: 9,
        id: "inc"
    },
    {
        title: "Interstellar",
        img: "its.png",
        score: 9.5,
        id: "its"
    },
    {
        title: "Parasite",
        img: "prs.png",
        score: 9.7,
        id: "prs"
    },
    {
        title: "The Dark Knight",
        img: "tdk.png",
        score: 9,
        id: "tdk"
    }
]

function cardConstructor(movieData) {
    movieData.forEach((movie) => {
        titleName.textContent = movie.title;
        titleImg.setAttribute('src', `./movies/img/${movie.img}`)
        detailsUrl.setAttribute('href', `./movies/${movie.id}.html`)
        const newCards = cardsContainer.cloneNode(true);
        cardFragment.appendChild(newCards);
    })
    cardsMain.appendChild(cardFragment);

}

cardConstructor(movieTitles);