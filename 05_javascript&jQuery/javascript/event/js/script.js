const btn = document.getElementById("submit");
const container = document.querySelector(".container");

btn.addEventListener("click", function(){
    btn.style.color = "red";
    console.log("클릭되었습니다.");
    container.style.background = "green";
    container.style.color = "#fff";

});

window.addEventListener('keydown', function(){
    // console.log(event.key);
    console.log(event.keyCode);
});