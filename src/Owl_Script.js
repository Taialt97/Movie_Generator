$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        //When page load (i think) call function 'inlargItem'
        onDragged: inlargItem,
        onInitialized: inlargItem,
        autoWidth: true,
        margin: 10,
        nav: false,
        navSpeed: 700,
        loop: true,
        dots: false,
        items: 5,
    })
    $('.owl-stage').addClass('wraper')
})

//Calls inlargItem on every change
$('.owl-carousel').on('changed.owl.carousel', function (event) {
    inlargItem(event)
})

//Select the forth element and add the class 'big' to it 
function inlargItem(event) {
    //Find all 'active' class and dvide them by two 
    //5 (on larg screens) avtive classes / 2 = 2.5 
    //Math.ceil(2.5) = 3
    var activeClassDividedByTwo = Math.ceil($(".active").length / 2)
    //Adding the activeClassDividedByTwo (is 3 on larg screens)
    let OwlNumber = event.item.index + activeClassDividedByTwo
    let ActiveH4 = event.item.index - 6
    //Not Active  
    $(".itemInfo").remove();
    $(".item").removeClass("big")
    $('.InfoOfItem').addClass('noDisplay')
    $('.resize').addClass('noDisplay')
    $('.fitImg').removeClass('borderWhite')
    //Active
    $(".item").eq(OwlNumber).addClass("big")
    $('.InfoOfItem').eq(OwlNumber).removeClass("noDisplay")
    $('.resize').eq(OwlNumber).removeClass("noDisplay")
    $('.fitImg').eq(OwlNumber).addClass("borderWhite")
    
}

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

