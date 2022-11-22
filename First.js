let greet = (n) => {
    console.log("first",n);
}
let call = () => {
    setTimeout( () => {console.log("second statement");},2000);
    greet("statement");
}
setTimeout(call,2000);
console.log("third statement");