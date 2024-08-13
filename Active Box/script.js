let menuIcon = document.querySelector("#menu-icon");
let nav = document.querySelector("nav");
let crossIcon=document.querySelector("#cross-icon");
let menuOff = true;
let header=document.querySelector("header");
menuIcon.addEventListener("click", () => {
        if (menuOff) {
                nav.classList.remove("navlinks");
                nav.classList.add("nav-active");
                menuOff = false;
        }else{
                nav.classList.remove("nav-active");
                nav.classList.add("navlinks");
                menuOff = true;    
        }
});
crossIcon.addEventListener("click",()=>{
        nav.classList.remove("nav-active");
        nav.classList.add("navlinks");
        menuOff = true;   
});
window.addEventListener("scroll",()=>{
        if(scrollY>30){
header.classList.remove("header-normal");
header.classList.add("header-fixed");

        }else{
                header.classList.remove("header-fixed");
                header.classList.add("header-normal"); 
        }
})