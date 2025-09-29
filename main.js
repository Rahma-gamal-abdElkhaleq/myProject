
let h1= document.getElementById("h1")
let btn = document.getElementById("btn")
function change(){
    h1.style.backgroundColor="red"
}
btn.addEventListener("click",function(){

h1.style.backgroundColor="green"
document.body.style.backgroundColor="black"

})
