function scrollUp(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
}
function scrollDown(){
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
}
function arrowCheck(){
    if (window.scrollY > (document.documentElement.scrollHeight/2)){
        arrowTop.hidden = false;
        arrowDown.hidden = true;
        }
    if (window.scrollY < (document.documentElement.scrollHeight/2)){
        arrowTop.hidden = true;
        arrowDown.hidden = false;
        }
}
const arrowTop = document.querySelector("#arrowTop");
arrowTop.addEventListener('click', scrollUp);
const arrowDown = document.querySelector("#arrowDown");
arrowDown.addEventListener("click", scrollDown);
document.addEventListener("scroll", arrowCheck)
arrowCheck()
