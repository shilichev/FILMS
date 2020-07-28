let randomId = [];
API_ID = [];
filmsData = [];
const getRandomInt = () => {
  for (i = 0; i < 5; i++) {
    randomId.push(`${Math.floor(Math.random() * Math.floor(9999999))}`);
  }
  return randomId;
};

const getAPI = () => {
  for (i = 0; i < 5; i++) {
    API_ID.push(`http://www.omdbapi.com/?i=tt${randomId[i]}&apikey=d139291d`);
  }
  return API_ID;
};
console.log(API_ID);

const getRandomFilms = async () => {
  for (i = 0; i < 5; i++) {
    await getFilm(API_ID[i]);
  }
};

const getRandomFilm = async (apiLink) => {
  const filmData = await $.ajax({
    url: apiLink,
    dataType: "json",
    success: getRandomFilms,
  });
  filmsData.push(filmData);
};

$(document).ready(function () {
  getRandomInt();
  getAPI();
  getRandomFilm(); //   showFilmsFromSearch();
});
// const showFilmsFromSearch = (films) => {
//   for (i = 0; i < 5; i++) {
//     console.log(films);
//     $("ul").append(`<li><img src="${films.Search[i].Poster}"></li>`);
//   }
// };

//   console.log(films.Search[1].Poster);
// };

// console.log(randomId);

// const getFilmsList = (filmsList) => {
//   // filteredContributors = filmsList;
//   // contributors = sorteringContributors(contributorsList, true);
//   showFilmsFromSearch(filmsList);
// };

// const getFilms = () => {
//   //   for (i = 0; i < 5; i++) {
//   $.ajax({
//     url: API_ID,
//     dataType: "json",
//     success: getFilmsList,
//   });
//   //   }
// };

// getFilms();

// getFilmsList();

// console.log(getFilmsList());

// $(document).ready(function () {
//   /* конфигурация */
//   let width = 130; // ширина картинки
//   let count = 3; // видимое количество изображений

//   let list = carousel.querySelector("ul");

//   let position = 0; // положение ленты прокрутки

//   carousel.querySelector(".prev").onclick = function () {
//     // сдвиг влево
//     position += width * count;
//     // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//     position = Math.min(position, 0);
//     list.style.marginLeft = position + "px";
//   };

//   carousel.querySelector(".next").onclick = function () {
//     // сдвиг вправо
//     position -= width * count;
//     // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент

//     position = Math.max(position, -width * (10 - count));
//     list.style.marginLeft = position + "px";
//   };
// });
// getFilms();
