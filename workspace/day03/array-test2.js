// 1. 제어문
// 2. callback 함수
// 3. arrow expression

// 1~10까지 Array 객체에 담은 후 짝수만 출력
//let datas = new Array(10).fill(0);
//let i = 0;
//datas.forEach(data => datas[i++] = i);
//datas.forEach(function(data,i){
//    datas[i] = i+1;
//});
//console.log(datas.filter(data => data % 2 == 0));
// 한글을 정수로 변경
//let hangle = "공일이삼사오육칠팔구"

// 스트림 버전
//function streamHangleToNum(letter) {
//    console.log(letter.split("").map(e => hangle.indexOf(e)).join(""));
//}
//streamHangleToNum("칠육오");

// 제어문 버전
//function hangleToNum(letter) {
    //result = "";
   // for (let i = 0; i < letter.length; i++) {
  //      result += hangle.indexOf(letter.charAt(i))
 //       }
//    return result;
//}
//console.log(hangleToNum("일삼삼사오")); 

// 정수를 한글로 변경

// 제어문 버전
let hangle = "공일이삼사오육칠팔구";

function numToHangle(selectNums) {
    result = "";
    for (let i = 0; i < selectNums.length; i++) {
        for (let j = 0; j < hangle.length; j++) {
            if(selectNums.charAt(i) == hangle.indexOf(hangle.charAt(j))){
                result += j;
            }
        }
    }
    return result;
}
console.log(numToHangle("공일일삼"));


// function changeToHangle(number) {
//     let hangle = "공일이삼사오육칠팔구";
//     number += "";
//     let result = "";
//     for (let i = 0; i < number.length; i++) {
//         result += hangle.charAt(parseInt(number.charAt(i)));
//     }
//     console.log(result);
// }
// changeToHangle(1024);


//스트림 버전
// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "1024".split("");
// let result = input.map(input => hangle[input]).join("");

// console.log(result);

// 1 ~ 100까지 합 출력
//let datas2 = new Array(100).fill(0).map((data, i) => i + 1);
//let result2 = datas2.reduce((variable, data) => variable + data);
//console.log(result2);