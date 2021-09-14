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
//same function with same number of arguments,different datatypes called as function overloading
class class_one{
    fun_one(arg1:number,arg2:number):void;
    fun_one(arg1:string,arg2:string):void;
    fun_one(arg1:boolean,arg2:boolean):void;
    fun_one(arg1:number,arg2:boolean):void;
    fun_one(arg1:any,arg2:any):void{
        console.log( arg1, arg2 );
    }
}
let obj:class_one = new class_one();
obj.fun_one(100,100);
obj.fun_one("Hello_1","Hello_2");
obj.fun_one(true,true);
obj.fun_one(2.5,true);



