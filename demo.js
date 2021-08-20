console.log("welcome to javascript");
//welcome to javascript
console.log( 10+10 );                           //20
console.log( 10+"10" );                         //1010
console.log( 10+ +"10");                        //20
console.log( 10 - "10" );                       //0
console.log( 10 * "10" );                       //100
console.log( "10" / 10 );                       //1
console.log( "10"+10-10 );                      //1000
//==(data)      ===(data & datatype)
console.log( 10 == "10" );                      //true
console.log( 10 === "10");                      //false
console.log( 10 == "ten");                      //false
console.log( 10 === "ten" );                    //false
//boolean
//true          ==> 1
//false         ==> 0
console.log( 1+true );                          //2
console.log( true+true );                       //2
console.log( true-false );                      //1
console.log( true/true );                       //1
console.log( true/false );                      //Infinity
console.log( 10>9>8 );                          //false
console.log( 8<9<10 );                          //true
console.log( 10+10 === 20 );                    //true
console.log( 0.1+0.2 == 0.30000000000000004 );  //true                       //false
//number
//string
//boolean
//undefined
//null
//bigint
//Symbol
//typeof
console.log( typeof "Hello" );                  //string
console.log( typeof 100 );                      //number
console.log( typeof true );                     //boolean
console.log( typeof undefined );                //undefined
console.log( typeof null );                     //object
console.log( typeof [] );                       //object
console.log( typeof function fun_one(){} );     //function
console.log( typeof 10n );                      //bigint
console.log( typeof Symbol(100) );              //symbol

//variable
//variables are used to "store" the data
//Ex. string, number, boolean, arrays, undefined, object.....
//var , let (or) const
//let and const keywords introduced in "ES6"
//a-z , A-Z , 0-9 , $ and _
//variables should not start with digits
//javascript supports datatypes
//1) string
//2) number
//3) boolean
//4) null
//5) undefined
//6) Symbol
//7) bigint


//string
//collection of characters
//"" , '' , ``(backtick)
//``(backtick) operator introduced in "ES6"
//``(backtick) operator also called as template literal
//``(backtick) operator used to define the "paragraphs"
var sub = "ReactJS";
var wish = `Welcome to ${sub}`;
console.log( wish );                //Welcome to ReactJS


var tbl_name = "employees";
var sal = 50000;
var sql_query = `select * from ${tbl_name} where esal>${sal}`;
console.log( sql_query );           //select * from employees where esal>50000


var uname = "ashokit";
var upwd = "ashokit123";
var login_query = `select * from ${tbl_name} where uname='${uname}' and upwd='${upwd}'`;
console.log( login_query );         //select * from employees where uname='ashokit' and upwd='ashokit123'


var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mern = `
    MERN Stack Development
    *************************
    Front End => ${sub_one}
    Backend   => ${sub_two}
    DataBase  => ${sub_three}
    *************************
`;
console.log(mern);


//undefined
//null
var x;
console.log(x);         //undefined
x=null;
console.log(x);         //null


console.log( undefined == undefined );          //true
console.log( undefined === undefined );         //true
console.log( null == null );                    //true
console.log( null === null );                   //true
console.log( undefined == null );               //true
console.log( undefined === null );              //false



//boolean
//true          => 1
//false         => 0

true ? console.log("Hello") : console.log("Hi")         //Hello
0 ? console.log("Hello") : console.log("Hi");           //Hi

if(1)
    console.log("Hello");
else
    console.log("Hi");                                  //Hello



if(undefined)                                           //Hi
    console.log("Hello");
else
    console.log("Hi");


var v1;     
if(v1){                                             //Hi
    console.log("Hello");
}else{
    console.log("Hi");
}


if(v1 == undefined)                             //Hello
    console.log("Hello");
else
    console.log("Hi");



if(-1000)
    console.log("Hello");                       //Hello
else
    console.log("Hi");


console.log( true+true );                       //2
console.log( true>true );                       //false
console.log( false>=false );                    //true
console.log( true+true+1 );                     //3
console.log( true + +"1" );                     //2
console.log( true - "1" - "0" - "2");           //-2
console.log( (true * true * false) / true );      //0                     


var abc123;
//var 123abc;         //Error
var _123abc;
var $123;
//var #123;
var abc$123_;






    




























