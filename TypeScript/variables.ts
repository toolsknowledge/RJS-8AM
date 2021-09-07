// variables
// store the data
// string, number, boolean , .......
// a-z , A-Z , 0-9, $ and _
// not start with digits
// "var" , "let" or "const"
// "let" and "const"  ES6
// Syntax :  let variablename:datatype = value;

//string
//collection of "characters" called as "string"
//"", '' and ``
//`` ===> "ES6"
//`` used to define the paragrahs
//`` operator also called as "template literals"
let sub_one:string = "ReactJS";
let sub_two:string = "NodeJS";
let sub_three:string = "MongoDB";
let mernStack:string = `
    MERN Stack Development Means
    ****************************
    frontend ====> ${sub_one}
    backend  ====> ${sub_two}
    backend  ====> ${sub_three}
    *****************************
`;
console.log(
    mernStack
);

let numberData:number = 100;
console.log( numberData );          //100


let booleanData:boolean = true;
console.log( booleanData );         //true


let global:any = "welcome to global data type";
console.log( global );   //welcome to global data type


let num_arr1:Array<number> = [10,20,30,40,50];
let num_arr2:number[] = [60,70,80,90,100];


let str_arr1:Array<string> = ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"];
let str_arr2:string[] = ["Welcome_1","Welcome_2","Welcome_3","Welcome_4","Welcome_5"];
str_arr2.forEach((arg1,arg2)=>{
    console.log( arg1, arg2);
});



let bool_arr1:Array<boolean> = [true,false,true,false];
let bool_arr2:boolean[] = [false,true,false,true];


let any_arr1:Array<any> = ["String",100,true,[]];


let obj1:any = {
    "key1" : "Value1",
    "key2" : "Value2",
    "key3" : "Value3"
};
for(let key in obj1){
    console.log( obj1[key] );
}

let products:any[] = [
    {"p_id":111,"p_name":"p_one","p_cost":10000},
    {"p_id":222,"p_name":"p_two","p_cost":20000},
    {"p_id":333,"p_name":"p_three","p_cost":30000},
    {"p_id":444,"p_name":"p_four","p_cost":40000},
    {"p_id":555,"p_name":"p_five","p_cost":50000}
];




























































