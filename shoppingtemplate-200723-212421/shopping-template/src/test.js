


function Car(make, model, year){
    this.make =make;
    this.model =model;
    this.year =year;
}


const car1=new Car('Engli', 'ta', '1993');

car1.make='ho';
console.log(car1.make);

Car.make='go';
console.log(Car.make);


function load(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items)
}

function updata(event, items){
    const dataset = event.target.dataset;
    const value = dataset.value;
    const key = dataset.key;

    items.forEach(item => {
        console.log(item[key] === value)
        });
    }

    const testbtn = document.querySelector('.buttons');

    testbtn.addEventListener('click', event => updata(event, items));

console.log(car1.make);



const array = ['ho', 'hos'];

const testAy = array;

console.log(testAy);

const coco = "ptp";
testAy[0] = coco;

console.log(testAy[0]);
console.log(array);


const obj = {
    name:'ho',
    age:2,
};

console.log(obj);

const testObj = obj;

console.log(testObj);

const ot = "ot";

testObj[0] = ot;
console.log(testObj[0]);
console.log(obj);


const hihi = "ho";

const hp = hihi;
console.log(hp);

/*
hp = array[0];

console.log(hihi);
*/



//const o ={};
//o.a =1;

//console.log(o);

//o.a =2; 

//console.log(o)