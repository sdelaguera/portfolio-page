const checkpoint = 300;
const learnedBtn = document.getElementById("i-learned")
const skillList = document.getElementById("skill-list")
const clickMe = document.getElementById("click-me")
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 0 - currentScroll / checkpoint;
  } else {
    opacity = 1;
  }
  document.querySelector(".containerTwo").style.opacity = opacity;
});

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint + 600) {
      opacity = 0 - currentScroll / checkpoint;
    } else {
      opacity = 1;
    }
    document.querySelector(".containerThree").style.opacity = opacity;
  });

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint + 900) {
      opacity = 0 - currentScroll / checkpoint;
    } else {
      opacity = 1;
    }
    clickMe.style.opacity = opacity;
  });


learnedBtn.addEventListener("click", function () {
    if (skillList.style.visibility = "none") {
        skillList.style.visibility = "visible";
        skillList.scrollIntoView({behavior: "smooth", block: "end"});
    } else {
        skillList.style.visibility = "none";
    }    
});
