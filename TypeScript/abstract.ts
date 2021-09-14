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


interface interface1{
    fun_one():any;
}
interface interface2 extends interface1{
    fun_two():any;
}
abstract class class_one implements interface2{
    fun_one():any{
        return {"key1":"Hello_1"};
    }   
    fun_two():any{
        return {"key1":"Hello_2"};
    }
    abstract fun_three():any;
}
class class_two extends class_one{
    fun_three():any{
        return {"key1":"Hello_3"}
    } 
}

let obj:class_two = new class_two();
console.log(
    obj.fun_one(),
    obj.fun_two(),
    obj.fun_three()
);



























