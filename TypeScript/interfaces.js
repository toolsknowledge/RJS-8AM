//when ever we know the declarations, but we dont know implementations then we will choose interfaces
//we will declare interfaces by using "interface" keyword
//implentation provided by either classes or json
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello_1";
        this.var_two = "Hello_2";
        this.var_three = "Hello_3";
    }
    return class_one;
}());
var obj = new class_one();
console.log(obj.var_one, obj.var_two, obj.var_three);
