let arr1 = [10,20,30,40,50,60,70,80,90,100];
const a1 = arr1.slice(5,10);
const a2 = arr1.slice(0,5);
console.log( a1.concat(a2) );
//[60,70,80,90,100,10,20,30,40,50]


let obj1 = {
    "key1" : "Hello_1"
};
let obj2 = {
    "key2" : "Hello_2"
};
let obj3 = {
    "key3" : "Hello_3"
}; 
let obj4 = Object.assign(obj1,obj2,obj3);
console.log( obj4 );
//{ key1: 'Hello_1', key2: 'Hello_2', key3: 'Hello_3' }

console.log( Object.keys(obj4) );
//[ 'key1', 'key2', 'key3' ]

console.log( Object.values(obj4) );
//[ 'Hello_1', 'Hello_2', 'Hello_3' ]

for(let key in obj4){
    console.log( key, obj4[key], typeof key );
}


let obj5 = {
    "key1" : "Hello_1",
    123 : "Hello_2"
}
console.log( obj5.key1 );               //Hello_1
console.log( obj5[123] );               //Hello_2


let array1 = [10,20,30,40,50,60,70,80,90,100];
array1.splice(5,4);
console.log( array1 );          //[ 10, 20, 30, 40, 50, 100 ]
array1.splice(5,1);
console.log( array1 );          //[ 10, 20, 30, 40, 50 ]
array1.splice(1,1);
console.log( array1 );          //[ 10, 30, 40, 50 ]


let array2 = [10,20,30,40,50,60,70,80,90,100];
console.log( array2.slice(2,4) );           //[ 30, 40 ]
console.log( array2.slice(6,9) );           //[ 70, 80, 90 ]








