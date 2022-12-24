const APILINK ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=158f91b6774a7899f2a6326dc3d13744&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=158f91b6774a7899f2a6326dc3d13744&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search =document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class','card');
            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');
            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');
            const img = document.createElement('img');
            img.setAttribute('class', 'thumbnail');
            const title = document.createElement('h3');
            title.setAttribute('class', 'movie-title');
            const imgContainer = document.createElement('div');
            imgContainer.setAttribute('class','img-container')
            
            title.innerHTML = `${element.title}`;
            img.src = IMGPATH + element.poster_path;
            
            imgContainer.appendChild(img);
            div_card.appendChild(imgContainer);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.appendChild(div_row);
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = "";

    const searchItem = search.value;

    if(searchItem){
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }

})