console.log(average(2, 3))

let result = add(2, 3, function(result){console.log(result/2)});
result = add(2,3);
if(result){
    console.log(result);
}

function add(number1, number2, callback){
    if(callback){
        callback(number1 + number2);
        return;      
    }
    return number1 + number2;
}

function average(number1, number2) {
   return add(number1, number2) / 2;
}

//JS에서는 매개변수의 개수에 맞추어 값을 전달할 필요가 있다.
//만약 매개변수 개수보다 부족하게 값을 전달하면 값을 못받은 매개변수에는 undefined가 들어간다.
//만약 매개변수 개수보다 넘치게 값을 전달하면 잘린다.

//JS에서는 함수를 값으로 취급하기 때문에 매개변수로 전달이 가능하다.
// 현재 함수에서 나온 결과 값을 다른 함수로 전달할 때에는 callback이라는 식별자로 함수를 전달받아 온다.

// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
// 1. 상품명과 가격, 개수는 A함수에서 전달받는다.
// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
// 3. A함수는 B함수를 callback함수로 전달받는다.


A("홈런볼", 2000, 3, B)

function A(name, price, count, callback){
    var result = price * count;
    if(callback){
        callback(name, result);
        return
    }
    return result;
}

function B(name, total){
    console.log(`상품명: ${name}, 가격: ${total}`)
}




// function A(name, price, stock, callback) {
//     if(callback){
//         var total = price*stock;
//         callback(name, total)
//         return;
//     }
//     return total;
// }

// A("홈런볼", 2000, 5, function(name, total){
//     console.log(`${name}: ${total}`)
// })
