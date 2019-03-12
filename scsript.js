//Owl Carousel
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        //When page load (i think) call function 'inlargItem'
        onInitialized: inlargItem,
        autoWidth: true,
        margin: 10,
        nav: true,
        navSpeed: 700,
        loop: true,
        dots: true,
        items: 5,
    })
    $('.owl-stage').addClass('wraper')
})

//Calls inlargItem on every change
$('.owl-carousel').on('changed.owl.carousel', function (event) {
    inlargItem(event)
})

//For key movement
$(document.documentElement).keyup(function (event) {
    if (event.keyCode == 37) {
        /*left key*/
        $('.owl-carousel').trigger('prev.owl.carousel', [700]);
    } else if (event.keyCode == 39) {
        /*right key*/
        $('.owl-carousel').trigger('next.owl.carousel', [700]);
    }
});

//Select the forth element and add the class 'big' to it 
function inlargItem(event) {
    //Find all 'active' class and dvide them by two 
    //5 (on larg screens) avtive classes / 2 = 2.5 
    //Math.ceil(2.5) = 3
    var activeClassDividedByTwo = Math.ceil($(".active").length / 2)
    //Adding the activeClassDividedByTwo (is 3 on larg screens)
    let OwlNumber = event.item.index + activeClassDividedByTwo
    //Rmove any 'big' class 
    $(".item").removeClass("big")
    //Adding new 'big' class to the fourth .item
    $(".item").eq(OwlNumber).addClass("big")
}


//Movielist Ajax
let MovieListArray = [];
runAjaxGet();

function runAjaxGet() {
    let RendomNumber = Math.floor((Math.random() * 1000) + 1);
    let MovieListUrl = `https://api.themoviedb.org/3/discover/movie?api_key=8f715f3496aabb0d3e8c0fcd01f82f13&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${RendomNumber}`
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: MovieListUrl,
        success: function (data) {
            MovieListArray = data.results; //same as top 
            GetInformation()
            console.log(MovieListArray)

        },
        error: function (error) {
            console.log('error :', error);
        }
    });
}

console.log('success :', MovieListArray);

function GetInformation() {
    $.each(MovieListArray, function (i, SingleMovie) {
        MovieTitle = SingleMovie.title
        $('#List').append(`<li style:"z-index:1;>${MovieTitle}</li>`)
    })
}