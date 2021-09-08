//function
//business logic called as function
//reuse the business logic
//the function without name called as anonymous function
//anonymous functions also called as arrow functions
//ES6
//=>
/*
   syntax
   ======
   1) function definition

   2) function calling

   function definition
   *******************
   let variablename:datatype = (arg1:datatype,arg2:datatype,.....argn:datatype):returntype=>{
       business logic
   }

   function calling
   ****************
   variablename(param1,param2,......paramn)
*/
/*
    let fun_one = ():string=>{
        return "welcome to arrow functions"
    }
    console.log( fun_one() );           //welcome to arrow functions
*/
/*
    let mern = (arg1:string,arg2:string,arg3:string):void=>{
        console.log( arg1, arg2, arg3 );
    };
    mern("ReactJS","NodeJS","MongoDB");
    mern("Angular12","NodeJS","MongoDB");
*/
/*
    let outer = ():any=>{
        return ():any=>{
            return {"key1":"Hello_1"}
        }
    };
    console.log( outer()().key1  );         //Hello_1
*/
/*
    let outer = ():any=>{
        return ():any=>{
            return ():any=>{
                return {
                    "fun_one" : ():any=>{ return "Hello" }
                }
            }
        }
    }
    console.log(  outer()()().fun_one() );      //Hello
*/
/*
    let mern = ( arg1:any, arg2:any, arg3:any ):any=>{
        console.log( arg1(), arg2(), arg3() );
    };

    mern( ():any=>{
        return "ReactJS";
    }, ():any=>{
        return "NodeJS";
    }, ():any=>{
        return "MongoDB";
    } );            //ReactJS NodeJS MongoDB
*/
var arr1 = [];
for (var i = 0; i < 5; i++) {
    arr1.push(function () { return "Hello"; });
}
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]());
}
