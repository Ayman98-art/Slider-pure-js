var imgs =Array.from(document.getElementsByClassName("img_item")); 
var poperImg = document.querySelector(".poperImg");
var close = document.getElementById("close");
var popImgIcon = document.querySelector(".popImgIcon");
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");

var currentIindexSlider = 0


for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function(point){
        currentIindexSlider = imgs.indexOf(point.target) //index of image
        poperImg.style.display = "flex"
        popImgIcon.style.backgroundImage = `url(${point.target.src})`
    })
}

rightArrow.addEventListener("click", rightSlider)

function rightSlider(){
        currentIindexSlider +=1;
        if (currentIindexSlider === imgs.length) {
            currentIindexSlider = 0;
        }
        imgs[currentIindexSlider].src
        popImgIcon.style.backgroundImage = `url(${imgs[currentIindexSlider].src})`
}

leftArrow.addEventListener("click", leftSlider)

function leftSlider() {
        currentIindexSlider -=1;
        if (currentIindexSlider == 0) {
            currentIindexSlider = imgs.length-1
        }
        imgs[currentIindexSlider].src
        popImgIcon.style.backgroundImage = `url(${imgs[currentIindexSlider].src})`
}

close.addEventListener("click",closeImg)
function closeImg() {
    poperImg.style.display = "none"
}
// https://www.toptal.com/developers/keycode
document.addEventListener("keydown",function(e){
    if (e.keyCode == 39) {
        rightSlider()
    }

    if (e.keyCode == 37) {
        leftSlider()
    }

    if (e.keyCode == 27) {
        closeImg()
    }
})




// !!!! make a simple counter
// var x = 1
// var count = setInterval(function() {
//     x++
//     if(x == 100){
//         clearInterval(count)
//     }
//     console.log(x);
// }, 10)




