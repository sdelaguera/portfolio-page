const checkpoint = 300;
const learnedBtn = document.getElementById("i-learned")
const skillList = document.getElementById("skill-list")
const clickMe = document.getElementById("click-me")
let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-item");
showSlides();

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

//methods
fullpage_api.setAllowScrolling(true);

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
    if (skillList.style.display = "none") {
        skillList.style.display = "block";
        skillList.scrollIntoView({behavior: "smooth", block: "end"});
    } else if (skillList.style.display = "block") {
        skillList.style.display = "none";
        skillList.scrollIntoView({behavior: "smooth", block: "end"});
    }    
});

function showSlides() {
  let i;
  { 
  let slides = document.getElementsByClassName("carousel-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transition  = "3.0s";
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  }
   slides[slideIndex-1].style.transition  = "3.0s";
   slides[slideIndex-1].style.opacity = "1";
 
  timer = setTimeout(showSlides, 3000);
}

