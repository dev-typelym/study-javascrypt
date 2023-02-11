/* banner.html */
HTMLCollection.prototype.forEach = Array.prototype.forEach;
const banner = document.querySelector("div.banner");
const imageDiv = document.querySelectorAll("div.banner div");
const lastFirstImageDiv = document.createElement("div");
const lastSecondImageDiv = document.createElement("div");
const lastThirdImageDiv = document.createElement("div");
const firstFirstImageDiv = document.createElement("div");
const firstSecondImageDiv = document.createElement("div");
const firstThirdImageDiv = document.createElement("div");
const next = document.querySelector("div.next");
const prev = document.querySelector("div.prev");
// const buttons = document.querySelectorAll(".buttons button");
let checkArrow = false;
let count = 3;
let auto = setInterval(autoSlide, 2000);
// let temp = buttons[0];

// HTMLCollection.prototype.forEach = Array.prototype.forEach;
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         clearInterval(auto);
//         count = parseInt(button.innerHTML);
//         changeButtonStyle();
//         banner.style.transition = "transform 0.3s";
//         banner.style.transform = `translate(${-360 * count}px)`;
//         auto = setInterval(autoSlide, 2000);
//     });
// });

imageDiv.forEach((div, i) => div.style.backgroundImage = `url(image/${i+1}.png)`)

banner.appendChild(lastFirstImageDiv);
banner.appendChild(lastSecondImageDiv);
banner.appendChild(lastThirdImageDiv);
lastFirstImageDiv.style.backgroundImage = `url(image/1.png)`;
lastSecondImageDiv.style.backgroundImage = `url(image/2.png)`;
lastThirdImageDiv.style.backgroundImage = `url(image/3.png)`;

banner.insertBefore(firstThirdImageDiv, document.querySelector("div.banner div"));
firstThirdImageDiv.style.backgroundImage = `url(image/8.png)`;

banner.insertBefore(firstSecondImageDiv, document.querySelector("div.banner div"));
firstSecondImageDiv.style.backgroundImage = `url(image/9.png)`;

banner.insertBefore(firstFirstImageDiv, document.querySelector("div.banner div"));
firstFirstImageDiv.style.backgroundImage = `url(image/10.png)`;

banner.style.transform = `translate(-1170px)`;

// function changeButtonStyle() {
//     if(temp){
//         temp.style.background = "white";
//         temp.style.color = "black";
//     }
//     buttons[count - 1].style.background = "black";
//     buttons[count - 1].style.color = "white";
//     temp = buttons[count - 1];
// }

function autoSlide(){
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-390 * ++count}px)`;
    console.log(count);
    if(count == 13) {
        count = 3;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-1170px)";
        }, 300);
    }
    // changeButtonStyle();
}

prev.addEventListener("click", function(){
    if(checkArrow){return;}
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-390 * --count}px)`;
    if(count == 3) {
        count = 9;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(${-390 * 11}px)`;
        }, 300);
    }
    changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(()=>{checkArrow = false}, 300);
});

next.addEventListener("click", function(){
    if(checkArrow){return;}
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-390 * ++count}px)`;
    if(count == 13) {
        count = 3;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-1170px)";
        }, 300);
    }
    // changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(()=>{checkArrow = false}, 300);
});
