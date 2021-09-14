//behaves like many called as polymorphism
//1) function overriding
//2) function overloading
/*
    //function overriding
    //overriding the parent class functionality with child class functionality called as function overriding
    class class_one{
        dbFun():any{
            return "MongoDB data Soon...!";
        }
    }
    class class_two extends class_one{
        dbFun():any{
            return "CassandraDB data soon....!";
        }
    }
    let obj:class_two = new class_two();
    console.log( obj.dbFun() );         //CassandraDB data soon....!
*/
//function overloading
//same function with different datatypes called as function overloading
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function (arg1, arg2) {
        console.log(arg1, arg2);
    };
    return class_one;
}());
var obj = new class_one();
obj.fun_one(100, 100);
obj.fun_one("Hello_1", "Hello_2");
obj.fun_one(true, true);
obj.fun_one(2.5, true);
