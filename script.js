var clickHereButton = document.querySelector(".takeName button");
var imageMovingLeftSite = document.querySelector(".image-slide .row.a .a");
var imageMovingRightSite = document.querySelector(".image-slide .row.a .b");
var upperUnderBackground = document.querySelector("#upperSite");
var NameGetValue = document.querySelector(".takeName input");
var resutlInputName = document.querySelector(".all-under .underBanner-text h3 span");
var underVideo = document.querySelector(".all-under video");
clickHereButton.addEventListener("click",function(){
    if(NameGetValue.value !==""){
        imageMovingLeftSite.classList.toggle("left-move");
        imageMovingRightSite.classList.toggle("right-move");
        upperUnderBackground.classList.toggle("uppersiteMove");
        resutlInputName.innerHTML = NameGetValue.value;
        underVideo.play();

    }
    else{
        alert("দয়া করে আপনার নাম লিখুন");
    }

});