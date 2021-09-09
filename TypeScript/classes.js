//class
//collection of "variables" and "functions" called as class
//we will create the class by using "class" keyword
//we will create the object to the class by using "new" keyword
//typescript supports following modifiers
//1) public
//2) private
//3) protected
//private modifier suggestable to "variables"
//public mobifier suggestabe to "functions"
//we will define the constructor by using "constructor" keyword
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    class class_one{
        private sub_one:string = "ReactJS";
        private sub_two:string = "NodeJS";
        private sub_three:string = "MongoDB";

        public frontend():string{
            return this.sub_one;
        }

        public backend():string{
            return this.sub_two;
        }

        public database():string{
            return this.sub_three;
        }

    };

    let obj:class_one = new class_one();
    console.log(
        obj.frontend(),
        obj.backend(),
        obj.database()
    );                          //ReactJS NodeJS MongoDB
*/
/*
    class class_one{
        private var_one:string;
        constructor(arg1:string){
            this.var_one = arg1;
        }
        public getVarOne():string{
            return this.var_one;
        }
    };

    let obj1:class_one = new class_one("Hello_1");
    console.log( obj1.getVarOne() );


    let obj2:class_one = new class_one("Hello_2");
    console.log( obj2.getVarOne() );
*/
/*
    class class_one{
        constructor(public arg1:any,
                    public arg2:any,
                    public arg3:any){}
    }
    let obj1:class_one = new class_one( {"key1":"Hello_1"},
                                        {"key1":"Hello_2"},
                                        {"key1":"Hello_3"});
    console.log(
        obj1.arg1.key1,
        obj1.arg2.key1,
        obj1.arg3.key1
    );          //Hello_1 Hello_2 Hello_3
*/
/*
    class class_one{
        var_one:string = "Hello_1";
    }

    class class_two extends class_one{
        var_two:string = "Hello_2";
    }

    let obj:class_two = new class_two();
    console.log(
        obj.var_one,
        obj.var_two
    );      //Hello_1 Hello_2
*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return "Hello_1";
    };
    return class_one;
}());
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.fun_two = function () {
        return "Hello_2";
    };
    return class_two;
}(class_one));
var class_three = /** @class */ (function (_super) {
    __extends(class_three, _super);
    function class_three() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_three.prototype.fun_three = function () {
        return "Hello_3";
    };
    return class_three;
}(class_two));
var obj = new class_three();
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
