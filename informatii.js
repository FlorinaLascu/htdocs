let booleanVariable = 1;
const IconButton = document.querySelector(".iconSwitch");
const IconButtonSecond = document.querySelector(".iconSwitch2");
const body = document.querySelector("body");
const main = document.getElementById("main");
const title = document.getElementById("title");
const paragraph = document.querySelectorAll("#intro-text");
const SwitchButton = document.querySelector(".black-white-button");

function switchToMode() {

    if (booleanVariable == 1) {
        SwitchButton.innerHTML = "Switch to White Mode";
        SwitchButton.style.border = "2px solid #fff";
        SwitchButton.style.color = "#fff";
        IconButtonSecond.style.display = "block !important";
        IconButton.style.display = "none !important";
        body.classList.add("bodyAnimated");
        main.classList.add("bodyAnimated");
        title.style.color = "#fff";
        for(let i=0;i<paragraph.length;i++){
            paragraph[i].style.color = '#fff';
        }
        booleanVariable = 0;
    }else {
        SwitchButton.innerHTML = "Switch to Dark Mode";
        SwitchButton.style.border = "2px solid #000";
        SwitchButton.style.color = "#000";
        IconButton.style.display = "block !important";
        IconButtonSecond.style.display = "none !important";
        body.classList.remove("bodyAnimated");
        main.classList.remove("bodyAnimated");
        title.style.color = "#000";
        for(let i=0;i<paragraph.length;i++){
            paragraph[i].style.color = '#000';
        }
        booleanVariable = 1;
    }

    

  }