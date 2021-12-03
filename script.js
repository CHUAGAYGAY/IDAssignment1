$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 100){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 750){
            $('.scrollup-btn').addClass("work");
        }else{
            $('.scrollup-btn').removeClass("work");
        }
    });

    
    // Toggling of Navigation Bar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
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


    // Typing Animation
    let type = new Typed(".type1", {
        strings: ["Chua Cheng Xuan", "蔡承轩"],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true
        
    });
    let types = new Typed(".type2", {
        strings: ["Ngee Ann Polytechnic", "The School of ICT", "Singapore"],
        typeSpeed: 70,
        backSpeed: 20,
        loop: true
    });


    // Scrollup Feature
    $('.scrollup-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, "fast");
    });
});


// Contact Form Input Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Contact Form Input Validation 
function validateForm() {

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Please Input Your Name";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Please Enter A Valid Email Address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[2].innerText = "Please Enter Your Message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag){
        success.innerText = "Message Sent Successfully, Thank You! :)";
    }
}


// Clears Error / Success Messages
function clearMessages(){
    
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }

    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

// To Check Whether Email Is Valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}