console.log("joy horibol");
// start form Headers

function one (number){
    console.log("fun one");
    let increment = number + 10;
    two(increment)
}
function two (number){
    console.log("fun two");
    let increment = number + 10;
    three(increment)
}
function three (number){
    console.log("fun three");
    let increment = number + 10;
    four(increment)
}
function four (number){
    console.log("fun four");
    console.log(number);
}
function five (){
    console.log("fun five");
    setTimeout(()=>{
        console.log("kaj korche");
    },3900)
}
function six (){
    console.log("fun six");
}
function seven (){
    console.log("fun seven");
}
// <<<<<<<<=====call the function ========>>>>>>>>>
one(10)
five()

// <<<<<<<<<<<======function in parameter and agrument=====>>>>>>>>>>>>>
function first (callback , num){
    console.log("this is first");
    let incrase = parseInt(num + 50);
    callback(incrase)
    
}
function scecond (callback,num){
    console.log("this is scecond");
    let incrase = parseInt(num + 50);
    callback(incrase)
    
}
function third (callback , num){
    console.log("this is third");
    let incrase = parseInt(num + 50);
    callback(incrase)
}
function fourth (callback, num){
    console.log("this is fourth");
    let incrase = parseInt(num + 50);
    callback(incrase)
}
function fifth (callback , num){
    console.log("this is fiveth");
    let incrase = parseInt(num + 50);
    callback(incrase)
}
// =========<<<<<<< callbackHell >>>>>>>>=======
// first( (incrase)=>{
//     scecond((incrase)=>{
//         third((incrase)=>{
//             fourth((incrase)=>{
//                 fifth((result)=>{
//                     let results = parseInt(result+50)
//                     // console.log(results);
//                 },incrase)
//             },incrase)
//         },incrase)
//     },incrase)
// } , 50 )

// =========<<<<<<<  selfInnovocation >>>>>>>>>=========

(function () {
    console.log("Hello! I called myself");
    
})();
