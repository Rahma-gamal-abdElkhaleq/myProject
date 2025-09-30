
let h1= document.getElementById("h1")
let btn = document.getElementById("btn")
let btn3 = document.getElementById("btn3")
function change(){
    h1.style.backgroundColor="red"
}
btn.addEventListener("click",function(){

h1.style.backgroundColor="green"
document.body.style.backgroundColor="black"

})

btn3.addEventListener("click",function(){

h1.style.backgroundColor="brown"
document.body.style.backgroundColor="darkgray"

})
