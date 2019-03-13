//Movielist Ajax
let MovieListArray = [];

$(document).ready(function(){
    let random = GetRendomNumber()
    GetMovieList(random)
})

function GetRendomNumber(){
    return Math.floor(Math.random() * 1001);
}


function GetMovieList(value) {
    console.log(value)
    MovieListUrl = `https://api.themoviedb.org/3/discover/movie?api_key=8f715f3496aabb0d3e8c0fcd01f82f13&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${value}`
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: MovieListUrl,
        async: false,
        success: function (data) {
            MovieListArray = data.results;
            // PrintAllMovies()
            console.log("success")
            console.log(MovieListArray)
        },
        error: function (error) {
            console.log('error :', error);
        }
    });
    PrintAllMovies()
}

function PrintAllMovies() {
    console.log(MovieListArray)
    $.each(MovieListArray, function (index, value) {
        Picture = ''
        if (value.poster_path !== null) {
            Picture = `http://image.tmdb.org/t/p/w500/${value.poster_path}`
        } else {
            Picture = './css/images/NoPoster.png'
        }
        $('.owl-carousel').append(`
        <div class="item">
        <h1 class="resize">${value.title}</h1>
        <img src="${Picture}" alt="" class="fitImg">
        <div class="InfoOfItem ">
        <div id="Stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <small>${value.release_date}</small>
        <p>${value.overview}</p>
        </div>
        </div>
        `)
        $('.movieTitles').append(`
        <h4>${value.title}</h4>
        `)
    })
}
