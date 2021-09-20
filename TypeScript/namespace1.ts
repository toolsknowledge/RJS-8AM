//namespaces are "internal" modules
//we can create namespaces by using "namespace" keyword

// namespace namespace1{
//     export let var_one:string = "Hello_1";
// }


// namespace namespace1{
//     export let sub_one:string = "ReactJS";
//     export let sub_two:string = "NodeJS";
//     export let sub_three:string = "MongoDB";
// }


// namespace namespace1{
//     export let obj:any = {
//         key1: fun_one(),
//         key2 : fun_two(),
//         key3 : fun_three()
//     };
//     function fun_one(){
//         return "hello_1";
//     }
//     function fun_two(){
//         return "hello_2";
//     }
//     function fun_three(){
//         return "hello_3";
//     }
// }



// namespace namespace1{
//     export function fun_one():any{
//         return {"key1":"Hello_1",
//                 "key2":"Hello_2",
//                 "key3":"Hello_3"}
//     }
// }


// namespace namespace1{
//     export class class_one{
//         constructor(public arg1:any, 
//                     public arg2:any, 
//                     public arg3:any){}
//     }
// }


namespace namespace1{
    export interface interface1{
        fun_one():any;
        fun_two():any;
        fun_three():any;
    }
}



































