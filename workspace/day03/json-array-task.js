// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.

// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.

function Product(name, price, count){
    this.name = name;
    this.price = price;
    this.count = count;
}

let product1 = new Product('신발', 120000, 3);
let product2 = new Product('모자', 50000, 7);
let product3 = new Product('가방', 250000, 10);

let products = new Array(product1, product2 ,product3);
console.log(products);

let productsJSON = JSON.stringify(products);
console.log(productsJSON);

let product1JSON = JSON.stringify(product1);
console.log(product1JSON);

// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다. (parsing)
// function total(dataJSON, callback) {
//     let data = JSON.parse(dataJSON);
//     var result = data.price * data.count;
//     if(callback){
//         callback(data.name, result)
//     }
//     return result;
// }

// function result(name, total){
//     console.log(`상품명: ${name}, 가격: ${total}`)
// }

// total(product1JSON, result);

function getTotals(productsJSON, callback) {
    let products = JSON.parse(productsJSON);
    let totals = products.map(product => product.price * product.count);
    if(callback){
        callback(totals);
    }
    return console.log(totals);
}

getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});
// getTotals(productsJSON, function (totals){
//     for (let i = 0; i < totals.length; i++) {
//         console.log(totals[i])}});


