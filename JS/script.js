const BTN = document.querySelector(".btn a");

BTN.classList.remove("hide");

function reveal(current) {
  //  e.preventDefault();

    current.innerHTML == "Check out my Resume!" ? BTN.innerHTML = "Thank you!" : 
    BTN.innerHTML = "Check out my Resume!";


}

BTN.addEventListener('click', function(){ reveal(this); }, false);
