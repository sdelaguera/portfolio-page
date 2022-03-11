const checkpoint = 300;
 
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