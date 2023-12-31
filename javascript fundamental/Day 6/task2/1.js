var answer=document.querySelector("#Answer")
var inputs=document.querySelectorAll(".width")
// console.log(answer);
var num
var num1
var operator
var equal
function EnterNumber(e){
    answer.value+=e
    num=answer.value

}
function EnterClear(){
    answer.value=""
}
function EnterOperator(e){
    answer.value+=e
    num+=e
    
}
function EnterEqual(e){
    equal=eval(num)
    answer.value=equal
}