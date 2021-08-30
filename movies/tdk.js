const btnHome = document.getElementById('homeBtn');
const btnRegister = document.getElementById('regBtn');
const movieTitle = document.getElementById('movieTitle');
const movieImg = document.getElementById('movieImg');
const movieSinopsis = document.getElementById('movieSinopsis');


let movieTitles = [
    {
        title: "Fast and Furious 9",
        img: "./img/ff9.png",
        score: 5,
        id: "ff9",
        sinopsis: "Dom Toretto vive una vida tranquila junto a Letty y su hijo, pero el peligro siempre regresa a su vida. En esta ocasión, el equipo se enfrenta a un complot mundial orquestado por el asesino más temible del mundo: el hermano de Dom."
    },
    {
        title: "Avatar",
        img: "./img/avt.png",
        score: 8,
        id: "avt",
        sinopsis: "En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi."
    },
    {
        title: "Black Widow",
        img: "./img/bw.png",
        score: 5,
        id: "bw",
        sinopsis: "Una peligrosa conspiración, relacionada con su pasado, persigue a Natasha Romanoff, también conocida como Viuda Negra. La agente tendrá que lidiar con las consecuencias de haber sido espía, así como con las relaciones rotas, para sobrevivir."
    },
    {
        title: "Inception",
        img: "./img/inc.png",
        score: 9,
        id: "inc",
        sinopsis: "Dom Cobb es un ladrón con una extraña habilidad para entrar a los sueños de la gente y robarles los secretos de sus subconscientes. Su habilidad lo ha vuelto muy popular en el mundo del espionaje corporativo, pero ha tenido un gran costo en la gente que ama. Cobb obtiene la oportunidad de redimirse cuando recibe una tarea imposible: plantar una idea en la mente de una persona. Si tiene éxito, será el crimen perfecto, pero un enemigo se anticipa a sus movimientos."
    },
    {
        title: "Interstellar",
        img: "./img/its.png",
        score: 9.5,
        id: "its",
        sinopsis: "Gracias a un descubrimiento, un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí."
    },
    {
        title: "Parasite",
        img: "./img/prs.png",
        score: 9.7,
        id: "prs",
        sinopsis: "Tanto Gi Taek como su familia están sin trabajo. Cuando su hijo mayor, Gi Woo, empieza a impartir clases particulares en la adinerada casa de los Park, las dos familias, que tienen mucho en común pese a pertenecer a dos mundos totalmente distintos, entablan una relación de resultados imprevisibles."
    },
    {
        title: "The Dark Knight",
        img: "./img/tdk.png",
        score: 9,
        id: "tdk",
        sinopsis: "Batman tiene que mantener el equilibrio entre el heroísmo y el vigilantismo para pelear contra un vil criminal conocido como el Guasón, que pretende sumir Ciudad Gótica en la anarquía."
    }
]

function cardPopulator(movieData) {
    const index = movieData.findIndex(function (movie) { return movie.id === 'tdk'});
    movieTitle.textContent = movieTitles[index].title;
    movieScore.textContent = `Rating: ${movieData[index].score}`;
    movieImg.setAttribute('src', movieTitles[index].img);
    movieSinopsis.textContent = movieTitles[index].sinopsis;
}

cardPopulator(movieTitles);