//when ever we know the declarations, but we dont know implementations then we will choose interfaces
//we will declare interfaces by using "interface" keyword
//implentation provided by either classes or json

/*
    interface interface1{
        sub_one:string;
        sub_two:string;
        sub_three:string;
    }

    let obj1:interface1 = {
        sub_one : "ReactJS",
        sub_two : "NodeJS",
        sub_three : "MongoDB"
    }

    console.log(
        obj1.sub_one,
        obj1.sub_two,
        obj1.sub_three
    );                              //ReactJS NodeJS MongoDB
*/

/*
    interface interface1{
        fun_one():void;
        fun_two():void;
        fun_three():void;
    }
    let obj1:interface1 = {
        fun_one : ():void=>{
            console.log("ReactJS");
        },
        fun_two : ():void=>{
            console.log("NodeJS");
        },
        fun_three : ():void=>{
            console.log("MongoDB");
        }
    };
    obj1.fun_one();
    obj1.fun_two();
    obj1.fun_three();

    let obj2:interface1 = {
        fun_one : ():void=>{ console.log("VueJS") },
        fun_two : ():void=>{ console.log("NodeJS") },
        fun_three : ():void=>{ console.log("MongoDB") }
    }
    obj2.fun_one();
    obj2.fun_two();
    obj2.fun_three();
*/



/*
    interface interface1{
        var_one:string;
        var_two:string;
        var_three:string;
    }
    class class_one implements interface1{
        var_one:string = "Hello_1";
        var_two:string = "Hello_2";
        var_three:string = "Hello_3";
    }
    let obj:class_one = new class_one();
    console.log(
        obj.var_one,
        obj.var_two,
        obj.var_three
    );          //Hello_1 Hello_2 Hello_3
*/



interface interface1{
    var_one:string;
}
interface interface2 extends interface1{
    var_two:string;
}
interface interface3 extends interface2{
    var_three:string;
}
class class_one implements interface3{
    var_one:string = "Hello_1";
    var_two:string = "Hello_2";
    var_three:string = "Hello_3";
}
let obj:class_one = new class_one();
console.log(
    obj.var_one,
    obj.var_two,
    obj.var_three
);
