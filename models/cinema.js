const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function() {
const filmTitles =  this.films.map(film => film.title);
return filmTitles;
};

Cinema.prototype.getFilmByTitle = function() {
const filmTitles = this.films.find(({title}) => title === 'Moonlight');
return filmTitles;

};


Cinema.prototype.getFilmByGenre = function () {

  const filmTitles = this.films.filter(films => films.genre === 'action');
  return filmTitles;


};

Cinema.prototype.getFilmsByYear = function () {
const filmTitles = this.films.filter(films => films.year === 2017);
return filmTitles;

};

module.exports = Cinema;