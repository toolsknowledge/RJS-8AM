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

/*
    enum Hoilidays{
        VINAYAKA = 1,
        PONGAL = 3,
        DIWALI = 1,
        DUSHEERA = 11 
    } 
    console.log(
        Hoilidays.VINAYAKA,
        Hoilidays.PONGAL,
        Hoilidays.DIWALI,
        Hoilidays.DUSHEERA
    );          //1 3 1 11
*/

/*
    enum Enum1{
        CONST1 = 10,
        CONST2,
        CONST3,
        CONST4
    }
    console.log( Enum1.CONST1, Enum1.CONST2, Enum1.CONST3, Enum1.CONST4 );
    //10 11 12 13
*/

/*
    enum Enum1{
        CONST1,
        CONST2,
        CONST3 = 10
    }

    function fun_one():Enum1{
        return 1;
    }

    console.log( fun_one() );
*/


/*
    enum Enum1{
        CONST1 = 100,
        CONST2,
        CONST3,
        CONST4
    }

    function fun_one(arg1:Enum1,arg2:Enum1,arg3:Enum1,arg4:Enum1):void{
        console.log( arg1, arg2, arg3, arg4 );
    }

    fun_one( Enum1.CONST1, Enum1.CONST2, Enum1.CONST3, Enum1.CONST4 );              //100 101 102 103
*/


/*
    enum Enum1{
        STR1 = "Hello_1",
        STR2 = "HELLO_2",
        STR3 = "HELLO_3",
        STR4 = "HELLO_4"
    }
    console.log(
        Enum1.STR1,
        Enum1.STR2,
        Enum1.STR3,
        Enum1.STR4
    );              //Hello_1 HELLO_2 HELLO_3 HELLO_4
*/


/*
    enum Enum1{
        STR1 = "Hello_1",
        STR2 
    }
    //Enum member must have initializer.
*/


/*
    enum Enum1{
        CONST1 = "Hello_1",
        CONST2 = 100,
        CONST3 = "Hello_2",
        CONST4 = 200
    }
    console.log(
        Enum1.CONST1,
        Enum1.CONST2,
        Enum1.CONST3,
        Enum1.CONST4
    );          //Hello_1 100 Hello_2 200
*/


/*
    let var_one:string | number | boolean;
    var_one = "Hello";
    var_one = 100;
    var_one = true;
    console.log( var_one );         //true
*/

type var1 = string;
let msg1:var1 = "welcome to type keyword in typescript";
console.log( msg1 );            //welcome to type keyword in typescript


type var2 = string | number | boolean;
let msg2:var2 = "Hello";
console.log( msg2 );
msg2 = 1000;
console.log( msg2 );
msg2 = true;
console.log(msg2);


enum Enum1{
    CONST1,
    CONST2,
    CONST3,
    CONST4
}
type x = Enum1;
let v1:x = 100;
console.log( v1 );


/*
    function fun_one(msg:string):never{
        throw new Error(msg);
    }
    fun_one("Hello");
*/


function fun_two():never{
    while(true){
        console.log("Hello");
    }
}
fun_two();


























































































































































































