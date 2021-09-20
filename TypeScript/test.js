//namespaces are "internal" modules
//we can create namespaces by using "namespace" keyword
// /// <reference path="namespace1.ts" />
// console.log( namespace1.var_one );
// /// <reference path="namespace1.ts" />
// console.log(
//     namespace1.sub_one,
//     namespace1.sub_two,
//     namespace1.sub_three
// );
// /// <reference path="namespace1.ts" />
// console.log(
//     namespace1.obj.key1
// );
// console.log(
//     namespace1.obj.key2
// );
// console.log(
//     namespace1.obj.key3
// );
// /// <reference path="namespace1.ts" />
// let obj:any = namespace1.fun_one();
// console.log(
//     obj.key1,
//     obj.key2,
//     obj.key3
// );
// /// <reference path="namespace1.ts" />
// let obj1:namespace1.class_one = new namespace1.class_one(
//                             {"sub_one":"ReactJS"},
//                             {"sub_two":"NodeJS"},
//                             {"sub_three":"MongoDB"});
// console.log(obj1.arg1.sub_one);
// console.log(obj1.arg2.sub_two);
// console.log(obj1.arg3.sub_three);
/// <reference path="namespace1.ts" />
var obj1 = {
    fun_one: function () {
        return "Hello_1";
    },
    fun_two: function () {
        return "Hello_2";
    },
    fun_three: function () {
        return "Hello_3";
    }
};
console.log(obj1.fun_one(), obj1.fun_two(), obj1.fun_three());
