"use strict";
// import { var_one } from "./module1";
// console.log( var_one );
exports.__esModule = true;
// import var_one from "./module1";
// console.log( var_one );
// import { var_one,var_two,var_three } from "./module1";
// console.log(var_one,
//             var_two,
//             var_three);
var my_var = require("./module1");
console.log(my_var.var_one, my_var.var_two, my_var.var_three);
