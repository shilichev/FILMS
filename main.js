let randomId = [];
API_ID_START = [
  "http://www.omdbapi.com/?t=green+book&apikey=d139291d",
  "http://www.omdbapi.com/?t=The+Shawshank+Redemption&apikey=d139291d",
  "http://www.omdbapi.com/?t=The+Godfather&apikey=d139291d",
  "http://www.omdbapi.com/?t=The+Dark+Knight&apikey=d139291d",
  "http://www.omdbapi.com/?t=Schindler's+List&apikey=d139291d",
];
let API_ID_SEARCH;
let data;
filmsData = [];
let numberOfFilms = 5;

const getRandomFilms = async () => {
  for (i = 0; i < 5; i++) {
    await getRandomFilm(API_ID_START[i]);
  }
};

const getRandomFilm = async (apiLink) => {
  const filmData = await $.ajax({
    url: apiLink,
    dataType: "json",
  });
  console.log(filmsData);
  filmsData.push(filmData);
  showStartFilms(filmsData);
};

const showStartFilms = (films) => {
  $("ul").append(`<li><img src="${films[i].Poster}"></li>`);
};

$(document).ready(function () {
  getRandomFilms();
});

$(".search_button").click(function () {
  let searchString = $("#search_box").val();
  data = searchString.replace(" ", "+");
  console.log(data);
  API_ID_SEARCH = `http://www.omdbapi.com/?s=${data}&apikey=d139291d`;
  getFilms(API_ID_SEARCH);
});

const getFilms = (appLink) => {
  $.ajax({
    url: appLink,
    dataType: "json",
    success: showFilmsFromSearch,
  });
};
const showFilmsFromSearch = (films) => {
  if (films.Search) {
    $("li").remove();
    for (i = 0; i < 10; i++) {
      $("ul").append(`<li><img src="${films.Search[i].Poster}"></li>`);
    }
    numberOfFilms = 10;
    return;
  }
  showError();
};
const showError = () => {
  alert("MOVIE NOT FOUND!");
};
$(document).ready(function () {
  let width = 250; // ширина картинки
  let count = 3; // видимое количество изображений

  let list = carousel.querySelector("ul");

  let position = 0; // положение ленты прокрутки

  carousel.querySelector(".prev").onclick = function () {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0);
    list.style.marginLeft = position + "px";
  };

  carousel.querySelector(".next").onclick = function () {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент

    position = Math.max(position, -width * (numberOfFilms - count));
    list.style.marginLeft = position + "px";
  };
});
