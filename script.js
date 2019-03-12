//Movielist Ajax
let MovieListArray = [];

GetMovieList()

function GetMovieList() {
    let RendomNumber = Math.floor((Math.random() * 1000) + 1);
    console.log(RendomNumber)
    let MovieListUrl = `https://api.themoviedb.org/3/discover/movie?api_key=8f715f3496aabb0d3e8c0fcd01f82f13&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${RendomNumber}`
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: MovieListUrl,
        async: false,
        success: function (data) {
            MovieListArray = data.results;
            PrintAllMovies()
        },
        error: function (error) {
            console.log('error :', error);
        }
    });
}

function PrintAllMovies() {
    console.log(MovieListArray)
    $.each(MovieListArray, function (index, value) {
        Picture = ''
        if (value.poster_path !== null) {
            Picture = `http://image.tmdb.org/t/p/w500/${value.poster_path}`
        } else {
            Picture = 'NoPoster.png'
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


// <!-- ItemInfo -->
// <div class="itemInfo">
//     <h1 class="TitleOfSingle">Moonlight</h1>
// <div id="Stars">
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
// </div>
// <small>oooooooooo | oooooooooo | ooooooooo</small>
// <p>
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officiis consequatur laborum aut
//     quas vero sequi repellendus facilis amet voluptate porro eos doloribus modi ipsum, earum fugiat hic
//     voluptates.
// </p>
// </div>
// <!-- /// -->

