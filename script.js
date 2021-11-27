$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 100){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scrollup-btn').addClass("work");
        }else{
            $('.scrollup-btn').removeClass("work");
        }
    });


    // Scrollup Feature
    $('.scrollup-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, "fast");
    });
    


    // Toggling of Navigation Bar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing Animation
    let types = new Typed(".type1", {
        strings: ["Chua Cheng Xuan", "蔡承轩"],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true
    });

    let type = new Typed(".type2", {
        strings: ["Ngee Ann Polytechnic", "The School of ICT", "Singapore"],
        typeSpeed: 70,
        backSpeed: 20,
        loop: true
    });
    
    // Sliding Feature
    $('.slide').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 2,
                nav: false
            }
        }
    });
});