const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;


const getFilmTitles = function(films) {

const filmTitles =  films.filter(film => film.title);
return filmTitles;
};

module.exports = Cinema;