/*
    //when ever we know the partial implementations then we will choose abstract classes
    abstract class class_one{
        fun_one():any{
            return "Hello_1";
        }
        abstract fun_two():any;
    }
    class class_two extends class_one{
        fun_two():any{
            return "Hello_2";
        }
    }
    let obj:class_two = new class_two();
    console.log(
        obj.fun_one(),
        obj.fun_two()
    );
*/
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
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return { "key1": "Hello_1" };
    };
    class_one.prototype.fun_two = function () {
        return { "key1": "Hello_2" };
    };
    return class_one;
}());
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.fun_three = function () {
        return { "key1": "Hello_3" };
    };
    return class_two;
}(class_one));
var obj = new class_two();
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
