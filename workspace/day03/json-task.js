//동물원에 동물이 3마리 있다.
//각 동물별 정보는 이름, 종, 나이이다.
function Animal(name, species , age){
    this.name = name;
    this.species = species;
    this.age = age;
}

let cat = new Animal("짬타이거", "고양이", 5);
let dog = new Animal("바둑이", "강아지", 4);
let hippo =  new Animal("옥자", "하마", 10)
zoo = [cat, dog, hippo];

let zooJSON = JSON.stringify(zoo);

//동물원의 동물 전체 평균 나이를 구한다.
function average(zooJSON, callback) {
    let animals = JSON.parse(zooJSON);
    // reduce(total, data)일 경우 항상 total값의 타입은 data의 타입과 동일하게 설정된다.
    let total = animals.map(animal => animal.age).reduce((total, age) => total + age);
    let average = total / animals.length;
    if(callback) {
        callback(average);
    }
    return average;
}

average(zooJSON, average => console.log(average));