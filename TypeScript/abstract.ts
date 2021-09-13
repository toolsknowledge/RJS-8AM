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