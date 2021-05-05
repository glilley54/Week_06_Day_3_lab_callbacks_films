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

module.exports = Cinema;