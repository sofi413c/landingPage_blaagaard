const popup = document.querySelector("#popup");
const knap = document.querySelector("#quiz_knap");
const luk = document.querySelector("#luk");

// document.querySelector("#popup").addEventListener("click", () => (popup.style.display = "none"));
knap.addEventListener("click", () => (popup.style.display = "none"));
luk.addEventListener("click", () => (popup.style.display = "none"));

knap.addEventListener("click", startPopup);
function startPopup(){
    console.log();
    popup.classList.toggle("section");
    popup.style.display = "flex";
}

function visQuiz(event){
    if (event.target == popup){
        startPopup();
    }  
}

// luk.addEventListener("click").classList.remove("#popup");

