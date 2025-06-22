// JavaScript goes here.
let result = document.querySelector("#result");
let questionOne = document.querySelector("#question-one");
let questionTwo = document.querySelector("#question-two");
let testButton = document.querySelector("#test-button");
let beeImg = document.querySelector(".bee-image");
let megaImg = document.querySelector(".mega-image");
let rangoImg = document.querySelector(".rango-image");
let djangoImg = document.querySelector(".django-image");
let strawImg = document.querySelector(".straw-image");

testButton.addEventListener("click", function(){

    if( questionOne.value <= 5 && questionTwo.value === "Comedy") {
        result.innerHTML = "Watch Megamind!";
        megaImg.style.display = "flex"
djangoImg.style.display = "none"
rangoImg.style.display = "none"
strawImg.style.display = "none"
beeImg.style.display = "none"
    } else if (questionOne.value <= 5 && questionTwo.value === "Drama"){
        result.innerHTML = "Watch Django!";
        djangoImg.style.display = "flex";
        megaImg.style.display = "none"
rangoImg.style.display = "none"
strawImg.style.display = "none"
beeImg.style.display = "none"
    } else if (questionOne.value >5 && questionTwo.value === "Comedy") {
        result.innerHTML = "Watch Rango";
        rangoImg.style.display = "flex";
        megaImg.style.display = "none"
djangoImg.style.display = "none"
strawImg.style.display = "none"
beeImg.style.display = "none"
    } else if (questionOne.value >5 && questionTwo.value === "Drama") {
        result.innerHTML = "Watch Straw!"
        strawImg.style.display = "flex"
        megaImg.style.display = "none"
djangoImg.style.display = "none"
rangoImg.style.display = "none"
beeImg.style.display = "none"
    } else {
        result.innerHTML = "You must've typed something wrong, watch the Bee Movie";
        beeImg.style.display = "flex";
        megaImg.style.display = "none"
djangoImg.style.display = "none"
rangoImg.style.display = "none"
strawImg.style.display = "none"

    }

})




