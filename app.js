const btnHome = document.getElementById('homeBtn');
const btnRegister = documen.getElementById('');
const cardsContainer = document.getElementById('cardsContainer');
const titleName = document.getElementById('titleName');
const titleImg = document.getElementById('titleImg');
const fragment = document.createDocumentFragment();

// array con titulos
let movieTitles = [
    {
        title: "Fast and Furious 9",
        img: "url",
        score: 0
    },
    {
        title: "Avatar",
        img: "",
        score: 0
    },
    {
        title: "Black Widow",
        img: "",
        score: 0
    },
    {
        title: "Inception",
        img: "",
        score: 0
    },
    {
        title: "Interstellar",
        img: "",
        score: 0
    },
    {
        title:"Parasite",
        img: "",
        score: 0
    },
    {
        title: "The Dark Knight",
        img: "",
        score: 0
    }
]

function cardConstructor (movie) {
    movieTitles.forEach((movie) => {
        titleName.textContent = movie.title;
        titleImg.setAttribute('src', movie.img)
    })

    const cardIterator = cardsContainer.cloneNode(fragment);
}