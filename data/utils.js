function formateTextFile(data) {
    let filmsArray = data.split('\n\n');
    filmsArray = filmsArray.map((film, i) => {
        return film.split('\n');
    });
    filmsArray = filmsArray.map((film) => {
       return film.map((about) => {
         return about.split(': ');
       });
    });
    return filmsArray;
}



module.exports = {
    formateTextFile
};
