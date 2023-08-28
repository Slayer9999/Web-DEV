let x=0

$(document).ready(function () {
  // Your additional JavaScript animations
  
  const element = document.getElementById("img");
  const element1 = document.getElementById("up");
  const element3 = document.getElementById("btn");
  const element4 = document.getElementsByClassName("animate");
  let Home=document.getElementsByClassName('Home')
  let About=document.getElementsByClassName('Abou')
  let Products=document.getElementsByClassName('Pro')
  let Clients=document.getElementsByClassName('Clien')
  let Contact=document.getElementsByClassName('Contac')
 
  //for side bar
 
       //end
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function animateElement(element, className, timeout) {
    await wait(timeout);
    element.classList.add(className);
  }

  async function animations() {
    // Use await with a Promise that resolves after 700ms
    await new Promise((resolve) => setTimeout(resolve, 600));
    element4[0].classList.add("animate1");
    await animateElement(element1, "show2", 700);

    await animateElement(element, "show", 1000);
    await animateElement(element3, "show1", 1200);

    element.style.transform = "rotate(10deg)";
  }
  animations();

  let context = document.getElementsByClassName("flex");
  let write = document.getElementsByClassName("write");
  let header = document.getElementsByClassName("header-content");
  let nav = document.getElementsByClassName("navigation");

  // All scroll functions

  function Context() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      context[0].classList.add("flexshow");
    } else {
      context[0].classList.remove("flexshow");
    }
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      write[0].classList.add("writel");
      nav[0].classList.add("navigationp");
    } else {
      write[0].classList.remove("writel");
      nav[0].classList.remove("navigationp");
      console.log("Hell");
    }

    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      header[0].classList.add("header-content-1");
    } else {
      header[0].classList.remove("header-content-1");
    }
  }

  window.addEventListener("scroll", () => {
    Context();
  });
 
  function scrollToEnd() {
    const scrollableContainer = document.querySelector("#Product");
    scrollableContainer.scrollTop = scrollableContainer.scrollHeight;
  }

  //Script for loading maps
  const iframeContainer = document.getElementById("iframe-container");
  let iframeInstance = null;

  const iframeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !iframeInstance) {
        loadIframe();
      }
    });
  });

  iframeObserver.observe(iframeContainer);

  // Function to load the iframe
  function loadIframe() {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", iframeContainer.dataset.src);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");

    iframeContainer.appendChild(iframe);
    iframeInstance = iframe;
  }

  //Sider Bar
  let bars = document.querySelector(".clickable-bar");
  let bar_one = document.querySelector(".bar-1");
  let bar_two = document.querySelector(".bar-2");
  let bar_three = document.querySelector(".bar-3");

  bars.addEventListener("click", function () {
    if (bars.dataset.clicked === "0") {
      bar_two.style.visibility = "hidden";
      bar_one.style.transform = "rotate(-40deg)";
      bar_one.style.marginTop = "15px";
      bar_three.style.transform = "rotate(40deg)";
      bar_three.style.marginTop = "-15px";

      bars.dataset.clicked = "1";
    } else {
      bar_one.removeAttribute("style");
      bar_three.removeAttribute("style");
      bar_two.style.visibility = "visible";

      bars.dataset.clicked = "0";
    }
  });
  $("li").hover(
    function () {
      $(this).find("a").css("color", "black");
      $(this)
        .find("span")
        .stop()
        .animate(
          {
            width: "100%",
            opacity: "1",
          },
          600,
          function () {
            // Animation complete.
            // Show Navigation
          }
        );
    },
    function () {
      $(this).find("a").css("color", "black");
      $(this)
        .find("span")
        .stop()
        .animate(
          {
            width: "0%",
            opacity: "0",
          },
          600,
          function () {
            // Animation complete.
            // Show Navigation
          }
        );
    }
  );
  

  let sidea = document.getElementsByClassName("sidebar");
  let s = document.getElementById("si");
  s.addEventListener("click", () => {
    side();
  });
  window.addEventListener("load", () => {
    if (window.innerWidth >= 883) {
     sidedone()
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 883) {
   sidedone()
    }
  });
  Clients[1].addEventListener("click", function() {
    let targetElement=document.getElementById('Clients')
    targetElement.scrollIntoView({
        behavior: "smooth"
    });
    
});
Contact[1].addEventListener("click", function() {
  let targetElement1=document.getElementById('con')
  targetElement1.scrollIntoView({
      behavior: "smooth"
  });
  
});
  Home[1].addEventListener('click',()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  
  })
  About[1].addEventListener('click',()=>{
    window.scrollTo({
      top: 650,
      behavior: "smooth"
  });
  
  })
  //for the bigger screens
   
   window.addEventListener('load',()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
    if (window.innerWidth>1330){
       
      Products[1].addEventListener('click',()=>{
       prod(1500)
       
      })
      
     }
     else if(window.innerWidth<1330 && window.innerWidth>900){
      Products[1].addEventListener('click',()=>{
       prod(1900)
       
      })
      
     }
     else if(window.innerWidth<900){
      Products[1].addEventListener('click',()=>{

        prod(2350)
        
      })
     }
     
   })
     
       window.addEventListener('resize',()=>{
        if (window.innerWidth>1330){
         
          Products[1].addEventListener('click',()=>{
            prod(1500)
            
          })
         }
         else if(window.innerWidth<1330 && window.innerWidth>900){
          
          Products[1].addEventListener('click',()=>{
          prod(1900)
          
          })
         }
         else if(window.innerWidth<900){
          
          Products[1].addEventListener('click',()=>{
            
            prod(2350)
            
            })
          }
       })

//for side bar
Clients[0].addEventListener("click", ()=> {
sidedone()
  let targetElement=document.getElementById('Clients')
  targetElement.scrollIntoView({
      behavior: "smooth"
  });
  
});
Contact[0].addEventListener("click", function() {
let targetElement1=document.getElementById('con')
targetElement1.scrollIntoView({
    behavior: "smooth"
});
sidedone()
});
Home[0].addEventListener('click',()=>{
  sidedone()
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
})
About[0].addEventListener('click',()=>{
  sidedone()
  window.scrollTo({
    top: 650,
    behavior: "smooth"
});
})
//for the bigger screens
 function prod(number){
  window.scrollTo({
    top: number,
    behavior: "smooth"
});
 }
 function Cli(num){
  window.scrollTo({
    top: num,
    behavior: "smooth"
});
 }
 window.addEventListener('load',()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
 
    Products[0].addEventListener('click',()=>{
      sidedone()
      prod(2350)
    })
   
   
 })
   
    
     //end
function sidedone(){
  if (x % 2 != 0) {
    x = 1;
    side();
    bar_one.removeAttribute("style");
    bar_three.removeAttribute("style");
    bar_two.style.visibility = "visible";

    bars.dataset.clicked = "0";
  }
}
  function side() {
    x += 1;
    if (x % 2 != 0) {
      sidea[0].style.marginLeft = "0px";
      
    } else {
      sidea[0].style.marginLeft = "-300px";
    }
  }
  
});


