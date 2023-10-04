var number_one = document.getElementById("number_one")
var number_two = document.getElementById("number_two")
var btn_sum = document.getElementById("btn_sum")
var btn_sub = document.getElementById("btn_sub")
var btn_mult = document.getElementById("btn_mult")
var btn_div = document.getElementById("btn_div")

btn_sum.addEventListener("click",()=>{
    var first_number = number_one.value
    var second_number = number_two.value
    var result = first_number + second_number
    alert("the sum is" +result)
})