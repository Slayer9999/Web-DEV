function Scroll(ScrollValue,target,Addition){
    let Element=document.querySelector(target);
    if(window.scrollY>=ScrollValue){
      Element.classList.add(Addition); 
    }
    else {
    Element.classList.remove(Addition);
  }
  }
  window.addEventListener("scroll", function() {
    Scroll(20, "#nav", "navcolor");
  });