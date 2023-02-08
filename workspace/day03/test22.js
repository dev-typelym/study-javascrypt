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