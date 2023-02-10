/*
day05/task01.html
*/ 

const button = document.querySelector("input[type=button]");
const td = document.querySelectorAll("tr")
const topList1 = document.getElementsByClassName("top1");
const topList2 = document.getElementsByClassName("top2");
const topList3 = document.getElementsByClassName("top3");

HTMLCollection.prototype.forEach = Array.prototype.forEach;
button.addEventListener("click", function(){
    let inputValue = document.getElementById("info").value;
    console.log(inputValue);
    let message = "다시 시도해주세요";
    topList1.forEach(top1 => top1.style.background = 'white');
    topList2.forEach(top1 => top1.style.background = 'white');
    topList3.forEach(top1 => top1.style.background = 'white');
    if(inputValue=="아동") {
        topList1.forEach(top1 => top1.style.background = '#EF5350');
        topList1.forEach(top1 => top1.innerHtml = "★" + top1.innerHtml);
    }else if(inputValue=="청소년"){
        topList2.forEach(top2 => top2.style.background  = '#EF5350');
    }else if(inputValue=="성인"){
        topList3.forEach(top3 => top3.style.background  = '#EF5350');
    }else{;
        alert(message);
    };
})

    