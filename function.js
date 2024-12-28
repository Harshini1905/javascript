/*
var a=10;
var b=5;
function add(a,b)
{
    console.log(a+b);
}
add(a,b);

*/

/*
function add(a,b)
{
    return a+b;
}
let c=add(1,2);
console.log(c);
*/

//arrow fuction
//let apple=() => console.log("hello");
//apple();

//let orange=() => "hai"
//console.log(orange()) 

/*
let banana=()  =>
{
    console.log("nan")
    return 9+1
}
console.log(banana())
*/

/*
let add=(a,b) =>{
    console.log("Addition");
    return a+b;
}
console.log(add(1,2));
*/

/*
let a=[1,2,3,4,5]
let b=a;
b[2]=10;
console.log(a);
*/

//destructuring
/*
let a=[1,2,3,4,5]
let [b,c,x,y,z]=a;
console.log(b);
*/

/*
let s={
    name:"harshini",
    age:19,
    city:"sathy"
}
let t={...s}
let {name,...r}=s
console.log(t);
console.log(name);
console.log(r);
*/

//callback hell
/*
function attendance(call){
    setTimeout(()=>{
        console.log("attendance must");
    call();
    },1000);
}

function lunch(call){
    setTimeout(()=>{
        console.log("eating lunch");
        call();
    },1000);
    }

 function goingtohome(call){
    setTimeout(()=>{
        console.log("left home");
        call();
    },1000);
        }

attendance(()=>{
    lunch(()=>{
        goingtohome(()=>{
            console.log("day completed"); 
        })
    })
})
    */

function file(filename, callback) {
    setTimeout(() => {
        console.log(`File ${filename} is being processed`);
        callback(filename); 
    }, 1000);
}

function file1(filename) {
    setTimeout(() => {
        console.log(`File ${filename} got downloaded`);
    }, 2000);
}


file("harry.txt",file1);

