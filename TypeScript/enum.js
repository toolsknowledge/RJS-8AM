/*
    enum Enum1{
        CONST1,
        CONST2,
        CONST3,
        CONST4
    }
    console.log(
        Enum1.CONST1,
        Enum1.CONST2,
        Enum1.CONST3,
        Enum1.CONST4
    );                  //0 1 2 3
*/
var msg1 = "welcome to type keyword in typescript";
console.log(msg1); //welcome to type keyword in typescript
var msg2 = "Hello";
console.log(msg2);
msg2 = 1000;
console.log(msg2);
msg2 = true;
console.log(msg2);
var Enum1;
(function (Enum1) {
    Enum1[Enum1["CONST1"] = 0] = "CONST1";
    Enum1[Enum1["CONST2"] = 1] = "CONST2";
    Enum1[Enum1["CONST3"] = 2] = "CONST3";
    Enum1[Enum1["CONST4"] = 3] = "CONST4";
})(Enum1 || (Enum1 = {}));
var v1 = 100;
console.log(v1);
/*
    function fun_one(msg:string):never{
        throw new Error(msg);
    }
    fun_one("Hello");
*/
function fun_two() {
    while (true) {
        console.log("Hello");
    }
}
fun_two();
