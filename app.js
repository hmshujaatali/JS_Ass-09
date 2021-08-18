//                     QUESTION#01
// function cdt(){
//     var cd_t=new Date()
//     console.log(cd_t)
// }
// cdt()
//                     QUESTION#02
// function fullName(){
//     var firstName=prompt("enter your first name")
//     var lastName=prompt("Enter your last  name")
//     var fn=firstName.concat(lastName)
//     console.log("Welcome ",fn)
// }
// fullName()
//                     QUESTION#03
// function sm(){
//     var a=+prompt("enter first value")
//     var b=+prompt("enter second value")
//     console.log(a+b)
// }
// sm()
//                     QUESTION#04
// function cal(){
//     var input1=+prompt("1st vaue")
//     var input2=+prompt("2nd vaue")
//     var opt=prompt("operator")
//     if(opt=="+"){
//         a=input1+input2
//         console.log(a)
//     }
//     if(opt=="-"){
//         a=input1-input2
//         console.log(a)
//     }
//     if(opt=="*"){
//         a=input1*input2
//         console.log(a)
//     }
//     if(opt=="/"){
//         a=input1/input2
//         console.log(a)
//     }
// }
// cal()
//                     QUESTION#05
// var v=prompt("enter value")
//  function sqr(a){
//    console.log(a*a)
// }
// sqr(v)
//                     QUESTION#06
// var num=prompt("")
// function fact(a){
//     console.log(a*(a-1))
// }
// fact(num)
//                     QUESTION#07
// var a=+prompt("Enter Starting Number")
// var b=+prompt("Enter ending Number")
// function count(c,d){
//     for(var i=c;i<=d;i++){
//         console.log(i)
//     }
// }
// count(a,b)
//                     QUESTION#08
// var base = +prompt("Enter Base Value")
// console.log(base)
// var prep = +prompt("Enter Prep Value")
// console.log(prep)
// function calculateHypotenuse(base, prep) {
//     var hyp = base + prep
//     console.log(hyp)
//     function calculateSquare(base, prep,hyp) {
//         var bsqr = base * base
//         console.log(bsqr)
//         var psqr = prep * prep
//         console.log(psqr)
//         var hsqr = bsqr + psqr
//         console.log(hsqr)
//         var hyp = Math.sqrt(hsqr)
//         console.log(hyp)
//     }
//     calculateSquare(base, prep,hyp)
// }
// calculateHypotenuse(base, prep)
//                     QUESTION#09
// var w=+prompt("enter width")
// var h=+prompt("enter height")
// function AOR(w,h){
//     var area=w*h
//     console.log(area)
// }AOR(w,h)
// function AOR(W,H){
//     var AREA=W*H
//     console.log(AREA)
// }AOR(2,5)
//                     QUESTION#10
// function palindrome() {
//     let str1 = prompt("enter word")
//         let str2=str1.split("").reverse().join("")
//         console.log(str2,str1)
//         if(str1===str2){
// console.log("equal equal")
// }
// else{
//     console.log("not EQUAL")
// }
// }
// palindrome()
//                      QUSETION#11
// function capital() {
//     var a = "the quick brown fox"
//     var b = a.split(" ")
//     for (var i = 0; i < b.length; i++) {
//         b[i] = (b[i].charAt(0).toUpperCase() + b[i].slice(1))
//         c = b.join(" ")
//     }
//     console.log(c)
// }capital()
//                      QUSETION#12
// function largest(a){
// var b = a.split(" ")
// var c = 0
// var d=null
// for (var i = 0; i < b.length; i++) {
//     if (b[i].length > c) {
//         c = b[i].length
//         d=b[i]
//     }}
// console.log(c,d)}largest("Web Development Tutorial")
//                      QUSETION#13
// function occurences(a,b){
// var c=0
// for(var i=0;i<=a.length;i++){
//     if(a[i]==b)
//     c=c+1
// }
// console.log(c)
// }occurences("JSResourceS.com","o")
//                      QUSETION#14(a)

// function calcCircumference(r){
//     var pi=3.142
//     let CircumferenceCircle = 2*pi*r
// console.log("The circumference is:",CircumferenceCircle)
// }
// calcCircumference("r")

//                      QUSETION#14(b)
// function calcArea(r){
//     var pi=3.142
//     let calcArea = 2*pi*r
// console.log("The Area is:",calcArea)
// }
// calcArea("r")









