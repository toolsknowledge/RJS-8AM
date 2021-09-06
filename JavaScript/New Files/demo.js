//class
//collection of variables and functions called as class
//we can create classes before ES6 version, by using constructor functions.
//in constructor functions all the members(variables and functions) will start with "this" keyword
//we can create object to the class by using "new" keyword

/*
    function class_one(){
        this.sub_one = "ReactJS";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    }
    let obj1 = new class_one();
    console.log( obj1.sub_one, obj1.sub_two, obj1.sub_three );          
            //ReactJS NodeJS MongoDB

    let obj2 = new class_one();
    console.log( obj2.sub_one, obj2.sub_two, obj2.sub_three );
    //ReactJS NodeJS MongoDB
*/


/*
    function class_one(){
        this.sub_one = "ReactJS";
        this.getSub = function(){
        return `Welcome to ${this.sub_one}`; 
        }
    }
    let obj = new class_one();
    console.log(
        obj.getSub()
    );          //Welcome to ReactJS
*/
/*
    function class_one(arg1,arg2,arg3){
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
    let obj1 = new class_one("ReactJS","NodeJS","MongoDB");
    console.log( obj1.var_one, obj1.var_two, obj1.var_three );
    //ReactJS NodeJS MongoDB
    let obj2 = new class_one("Angular12","Go","CassandraDB");
    console.log(
        obj2.var_one, obj2.var_two, obj2.var_three
    );          //Angular12 Go CassandraDB
*/


/*
    function class_one(){

    };
    class_one.prototype.var_one = "Hello";
    let obj = new class_one();
    console.log( obj.var_one );         //Hello
*/

/*
    function class_one(){

    }
    class_one.prototype.var_one = "ReactJS";
    class_one.prototype.fun_one = function(){
        return "ReactJS With TSX";
    };
    let obj = new class_one();
    console.log(
        obj.var_one,
        obj.fun_one()
    );
    //ReactJS
    //ReactJS With TSX
*/


/*
    function class_one(){

    }
    class_one.prototype.var_one = "Hello_1";

    function class_two(){

    }
    class_two.prototype = Object.create(class_one.prototype);
    class_two.prototype.var_two = "Hello_2";

    let obj1 = new class_one();
    console.log( obj1.var_one );                        //Hello_1


    let obj2 = new class_two();
    console.log( obj2.var_one, obj2.var_two );          //Hello_1 Hello_2
*/



/*
    function Parent(){

    };
    Parent.prototype.sub_one = "ReactJS";

    function Child(){

    };
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.sub_two = "NodeJS";

    function Subchild(){

    };
    Subchild.prototype = Object.create(Child.prototype);
    Subchild.prototype.sub_three = "MongoDB";


    let p = new Parent();
    console.log( p.sub_one );               //ReactJS

    let c = new Child();
    console.log( c.sub_one, c.sub_two );     //ReactJS NodeJS


    let s = new Subchild();
    console.log( s.sub_one, s.sub_two, s.sub_three );   //ReactJS NodeJS MongoDB
*/

/*
    function Parent(){

    };
    Parent.prototype.fun_one = function(){
        return "Hello_1";
    }

    function Child(){

    };
    Child.prototype = Object.create( Parent.prototype );
    Child.prototype.fun_two = function(){
        return "Hello_2";
    }

    function SubChild(){

    }
    SubChild.prototype = Object.create(Child.prototype);
    SubChild.prototype.fun_three = function(){
        return "Hello_3";
    };

    let p = new Parent();
    console.log( p.fun_one() );             //Hello_1  

    let c = new Child();
    console.log( c.fun_one(), c.fun_two() );  //Hello_1 Hello_2


    let s = new SubChild();
    console.log(
        s.fun_one(), s.fun_two(), s.fun_three()
    );  

    //Hello_1 Hello_2 Hello_3
*/


/*
    function Parent(){

    };
    Parent.prototype.dbFun = function(){
        return "Data From MongoDB Soon...!";
    };

    function Child(){

    };
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.dbFun = function(){
        return "Data from CassandraDB Soon...!";
    };
    let c = new Child();
    console.log( c.dbFun() );           //Data from CassandraDB Soon...!
*/


/*
    class class_one{
        fun_one(){
            return "Hello_1";
        }
        fun_two(){
            return "Hello_2";
        };
        fun_three(){
            return "Hello_3";
        }
    };
    let obj = new class_one();
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
    //Hello_1 Hello_2 Hello_3
*/

/*
    class class_one{
        var_one;
        constructor(){
            this.var_one = "Hello";
        }
    };
    let obj = new class_one();
    console.log( obj.var_one );         //Hello
*/


/*
    class class_one{
        var_one;
        constructor(){
            this.var_one = "Hello_1";
        }
        fun_one(){
            return this.var_one;
        }
    }
    let obj = new class_one();
    console.log( obj.fun_one() );           //Hello_1
*/


/*
    class class_one{
        var_one;
        var_two;
        var_three;
        constructor(arg1,arg2,arg3){
            this.var_one = arg1;
            this.var_two = arg2;
            this.var_three = arg3;
        }
    };
    let obj1 = new class_one("ReactJS","NodeJS","MongoDB");
    console.log( obj1.var_one, obj1.var_two, obj1.var_three );    //ReactJS NodeJS MongoDB
*/

/*
    class class_one{
        #var_one;
        constructor(){
            this.#var_one = "Hello";
        }
    }
    console.log( new class_one().var_one );
*/


/*
    class class_one{
        #fun_one(){
            return "Hello_1";
        }

        fun_two(){
            return this.#fun_one();
        }
    }
    console.log( new class_one().fun_two() );           //Hello_1
*/


/*
    class class_one{
        var_one = "Hello_1";
    }

    class class_two extends class_one{
        var_two = "Hello_2";
    }

    let obj = new class_two();
    console.log( obj.var_one, obj.var_two );            //Hello_1 Hello_2
*/

class class_one{
    var_one;
    constructor(arg1){
        this.var_one = arg1;
    }
}
class class_two extends class_one{
    constructor(){
        super("Hello");
    }
}
let obj = new class_two();
console.log( obj.var_one );             //Hello
























































































































