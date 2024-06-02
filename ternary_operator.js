
// //ternary operator
// let age = 10;
// let name = "Sarad";

// if(age>10){
//     name ="Sarad"
// }else{
//     name ="Ram";
// }

// let age = 16;
// let name =  age >10 && "Sarad";
// let name =  age >10 || "Sarad";
let name =  age >10 ? "Sarad" : "Ram"; //if else

const Component = ()=>{
    return age > 10 ? <div> Sarad</div> : <div>Ram</div>;
}
