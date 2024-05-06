let btn = document.querySelector(".FirstButton");
let modal = document.querySelector(".MainModal");
let span = document.querySelector(".close");
let btn2 = document.querySelector(".SecondButton");

btn.addEventListener("click", function(){
  modal.style.display = "block";
})
span.addEventListener("click", function(){
    modal.style.display = "none"
})
btn2.addEventListener("click", function(){
    modal.style.display = "none"
})
window.addEventListener("click", function(Eligulu) {
    if (Eligulu.target == modal) {
        modal.style.display = "none"
    }
})