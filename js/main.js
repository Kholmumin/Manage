let elBtn = document.querySelector(".open");
let elBody = document.querySelector("body");

elBtn.addEventListener("click", function(){
    elBody.classList.toggle("show")
    if (elBody.classList.contains("show")){
        elBody.style.position = "fixed"
        elBody.style.width = "100%"
    }else{
        elBody.style.position = "static" 
    }
})