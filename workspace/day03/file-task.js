// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.


let file = require('fs');


function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

products = [
    new Product("신발", 150000, 5),
    new Product("모자", 50000, 20),
    new Product("바지", 80000, 15)
]

let productsJSON = JSON.stringify(products);

// file.writeFile('product.json', productsJSON, 'utf-8', function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log("성공!")
//     }
// });

// file.readFile('product.json', 'utf-8', function(error, content) {
//     if(error){
//         console.log(error);
//     }else{
//         console.log(JSON.parse(content));
//     }
// });


// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
file.writeFile('shop.json', productsJSON, 'utf-8', function(error){
    if(error){
        console.log(error)
    }else{
        console.log("성공!")
    }
});

 file.readFile('shop.json', 'utf-8', function(error, content) {
     if(error){
         console.log(error);
     }else{S
         console.log(JSON.parse(content));
     }
 });
file.readFile('shop.json', 'utf-8', (error, content)  => {console.log(JSON.parse(content));});

function total(productsJSON, callback) {
    let products = JSON.parse(productsJSON);
    // reduce(total, data)일 경우 항상 total값의 타입은 data의 타입과 동일하게 설정된다.
    let totalPrice = products.map(product => product.price * product.stock).reduce((total, price) => total + price);
    let totalStock = products.map(product => product.stock).reduce((total, stock) => total + stock);    
    if(callback) {
       return callback(totalPrice, totalStock);
    }
}

let sumObject = {
    totalprice : 0,
    totalstock : 0
};
total(productsJSON, (totalPrice, totalStock) => {sumObject.totalprice = totalPrice; sumObject.totalstock = totalStock;});

let sumObjectArr = new Array(sumObject);

let totalArrJSON = JSON.stringify(sumObjectArr);

file.writeFile('sum.json', totalArrJSON, 'utf-8', function(error){
    if(error){
        console.log(error)
    }else{
        console.log("성공!")
    }
}); 