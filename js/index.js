const hamberger=document.querySelector(".hamberg");
const header=document.querySelector(".header");
const overlay=document.querySelector(".overlay");
const menu=document.querySelector(".menu");
const doc=document.querySelector("body");
hamberger.addEventListener("click",function(){
  if(header.classList.contains("open")){
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    menu.classList.add("visibility");
    doc.classList.remove("overflow");

    // header.classList.toggle("overlay");
  }else {
    doc.classList.add("overflow");
  header.classList.add("open");
  overlay.classList.remove("fade-out");
  overlay.classList.add("fade-in");
  menu.classList.remove("visibility");



    // header.classList.toggle("overlay");

  }
})
