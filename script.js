// OPENING TRANSITIONS
let homeCounter = 0;
function homeBtn() {
  homeCounter += 1;
  if (homeCounter%2==1) {
    document.querySelector("#homeBG div:nth-child(3)").classList.toggle("home1");
    document.querySelector("#homeBG div:nth-child(4)").classList.toggle("home2");
    document.querySelector("#homeBG div:nth-child(5)").classList.toggle("home3");
    document.querySelector("#homeBG div:nth-child(6)").classList.toggle("home4");
    setTimeout(() => {
      document.querySelector("#homeBG div:nth-child(3) img").style.opacity = "1";
      document.querySelector("#homeBG div:nth-child(4) img").style.opacity = "1";
      document.querySelector("#homeBG div:nth-child(5) img").style.opacity = "1";
      document.querySelector("#homeBG div:nth-child(6) img").style.opacity = "1";
    }, 700)
  }
  else {
    document.querySelector("#homeBG div:nth-child(3) img").style.opacity = "0";
    document.querySelector("#homeBG div:nth-child(4) img").style.opacity = "0";
    document.querySelector("#homeBG div:nth-child(5) img").style.opacity = "0";
    document.querySelector("#homeBG div:nth-child(6) img").style.opacity = "0";
    setTimeout(() => {
      document.querySelector("#homeBG div:nth-child(3)").classList.toggle("home1");
      document.querySelector("#homeBG div:nth-child(4)").classList.toggle("home2");
      document.querySelector("#homeBG div:nth-child(5)").classList.toggle("home3");
      document.querySelector("#homeBG div:nth-child(6)").classList.toggle("home4");
    }, 700)
  }
}

// SHIFTING TABS
function tab1() {tabAll(); document.querySelector("#T-A").style.transform = "translate(0vw, 0vh)"}
function tab2() {tabAll(); document.querySelector("#T-B").style.transform = "translate(0vw, 0vh)"}
function tab3() {tabAll(); document.querySelector("#T-C").style.transform = "translate(0vw, 0vh)"}
function tab4() {tabAll(); document.querySelector("#T-D").style.transform = "translate(0vw, 0vh)"}

function tabAll() {document.querySelectorAll(".tabsBG").forEach(n => {n.style.transform = "translate(120vw, 0vh)";})}