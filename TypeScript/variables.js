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
var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mernStack = "\n    MERN Stack Development Means\n    ****************************\n    frontend ====> " + sub_one + "\n    backend  ====> " + sub_two + "\n    backend  ====> " + sub_three + "\n    *****************************\n";
console.log(mernStack);
var numberData = 100;
console.log(numberData); //100
var booleanData = true;
console.log(booleanData); //true
var global = "welcome to global data type";
console.log(global); //welcome to global data type
var num_arr1 = [10, 20, 30, 40, 50];
var num_arr2 = [60, 70, 80, 90, 100];
var str_arr1 = ["Hello_1", "Hello_2", "Hello_3", "Hello_4", "Hello_5"];
var str_arr2 = ["Welcome_1", "Welcome_2", "Welcome_3", "Welcome_4", "Welcome_5"];
str_arr2.forEach(function (arg1, arg2) {
    console.log(arg1, arg2);
});
var bool_arr1 = [true, false, true, false];
var bool_arr2 = [false, true, false, true];
var any_arr1 = ["String", 100, true, []];
var obj1 = {
    "key1": "Value1",
    "key2": "Value2",
    "key3": "Value3"
};
for (var key in obj1) {
    console.log(obj1[key]);
}
var products = [
    { "p_id": 111, "p_name": "p_one", "p_cost": 10000 },
    { "p_id": 222, "p_name": "p_two", "p_cost": 20000 },
    { "p_id": 333, "p_name": "p_three", "p_cost": 30000 },
    { "p_id": 444, "p_name": "p_four", "p_cost": 40000 },
    { "p_id": 555, "p_name": "p_five", "p_cost": 50000 }
];
