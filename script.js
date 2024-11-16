let div = document.querySelector(".eyecontainer");
let openeye = document.querySelector(".ri-eye-line");
let closeeye = document.querySelector(".ri-eye-off-line");
let password = document.querySelector(".password");

let flag = 0;
div.addEventListener("click", () => {
  if (flag == 0) {

    flag = 1;
    closeeye.style.display = "initial";
    openeye.style.display = "none";
  
    password.setAttribute("type", "text");
  } else {
    
    flag = 0;
    closeeye.style.display = "none";
    openeye.style.display = "initial";


    password.setAttribute("type", "password");
  }
});
