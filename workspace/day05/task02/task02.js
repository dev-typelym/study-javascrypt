/*day05/task02.html */
const button = document.querySelector("input[type=button]");
const result1 = document.getElementById("result1");
const count = document.getElementById("count")
globalThis.countNum=1;

function numToHangle(letter) {
    let result = "";
    let hangle = "공일이삼사오육칠팔구".split("");
    for (let i = 0; i < letter.length; i++) {
        if(letter[i] == "."){
            result += "."
        }else if(letter[i] == 0){
            result += hangle[letter.charAt(i)];
        }else if(letter[i] == 1){
            result += hangle[letter.charAt(i)];
        }else if(letter[i] == 2){
            result += hangle[letter.charAt(i)];
        }else if(letter[i] == 3){
            result += hangle[letter.charAt(i)];
        }else if(letter[i] == 4){
            result += hangle[letter.charAt(i)];
        }else if(letter[i] == 5){
            result += hangle[letter.charAt(i)];
        }else if(letter[i] == 6){
            result += hangle[letter.charAt(i)];
        }else if(letter[i] == 7){
            result += hangle[letter.charAt(i)];
        }else if(letter[i] == 8){
            result += hangle[letter.charAt(i)];
        }else if(letter[i] == 9){
            result += hangle[letter.charAt(i)];
        }else if(letter[i] == "."){
            result = "숫자만 입력하세요."
        }else{
            result = "숫자만 입력하세요.";
        }
    }
    return result;
}
console.log(numToHangle(1234)); 

button.addEventListener("click", function(){
    errorMessage = "숫자만 입력해주세요"
    countNum ++;
    let inputValue = document.querySelector("input[type=text]").value;
    console.log(inputValue);
    let finalResult = numToHangle(inputValue);
    result1.innerHTML = finalResult;
    if(finalResult[0]=="."){
        result1.innerHTML = errorMessage;
    }else{
        result1.innerHTML = finalResult;
    }
    count.innerHTML = countNum;
    console.log(finalResult);
});