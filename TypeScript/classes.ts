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


/*
    class class_one{
        fun_one():string{
            return "Hello_1";
        }
    }
    class class_two extends class_one{
        fun_two():string{
            return "Hello_2";
        }
    }
    class class_three extends class_two{
        fun_three():string{
            return "Hello_3";
        }
    }
    let obj:class_three = new class_three();
    console.log(
        obj.fun_one(),
        obj.fun_two(),
        obj.fun_three()
    );      //Hello_1 Hello_2 Hello_3
*/




/*
    class class_one{
        public var_one:string;
        constructor(arg1:string){
            this.var_one = arg1;
        }
    }
    class class_two extends class_one{
        public var_two:string;
        constructor(arg1:string,arg2:string){
            super(arg1);
            this.var_two = arg2;
        }
    }
    let obj:class_two = new class_two("Hello_1","Hello_2");
    console.log( obj.var_one, obj.var_two );
*/

/*
    class class_one{
        static var_one:string = "Hello";
        static fun_one():string{
            return "Welcome";
        }
    }
    console.log(
        class_one.var_one,
        class_one.fun_one()
    );
*/


/*
    class class_one{
        private constructor(){}
        static fun_one():any{
            return new class_one();
        }
        fun_two():any{
            return "Hello";
        }
    }
    console.log( class_one.fun_one().fun_two() );
*/


class class_one{
    readonly var_one:string = "Hello";
}
let obj:class_one = new class_one();
console.log( obj.var_one );
obj.var_one = "Welcome";
//Cannot assign to 'var_one' because it is a read-only property.
















































