const btnHome = document.getElementById('homeBtn');
const btnRegister = document.getElementById('regBtn');
const cardsContainer = document.getElementById('cardsContainer');
const cardsMain = document.getElementById('cardsMain');
const titleName = document.getElementById('titleName');
const titleImg = document.getElementById('titleImg');
const cardFragment = document.createDocumentFragment();

// array con titulos
let movieTitles = [
    {
        title: "Fast and Furious 9",
        img: "./img/ff9.png",
        score: 5
    },
    {
        title: "Avatar",
        img: "./img/avt.png",
        score: 8
    },
    {
        title: "Black Widow",
        img: "./img/bw.png",
        score: 5
    },
    {
        title: "Inception",
        img: "./img/inc.png",
        score: 9
    },
    {
        title: "Interstellar",
        img: "./img/its.png",
        score: 9.5
    },
    {
        title: "Parasite",
        img: "./img/prs.png",
        score: 9.7
    },
    {
        title: "The Dark Knight",
        img: "./img/tdk.png",
        score: 9
    }
]

function cardConstructor(movieData) {
    movieData.forEach((movie) => {
        titleName.textContent = movie.title;
        titleImg.setAttribute('src', movie.img)

        const newCards = cardsContainer.cloneNode(true);
        cardFragment.appendChild(newCards);
    })
    cardsMain.appendChild(cardFragment);
    
}

cardConstructor(movieTitles);