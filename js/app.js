// // DOM => document object model
// const init =()=>{
//     const hamburger = document.querySelector(".hamburger")
// const sidebarclosebutton = document.querySelector(".close-button")
// const sidebarcontainer = document.querySelector(".sidebar-container")
// const openSidebar =()=>{
//     sidebarcontainer.classList.add('show-sidebar') 
// }
// const closeSidebar = () =>{
//     sidebarcontainer.classList.remove("show-sidebar")  
// }
//  hamburger.addEventListener("click" ,openSidebar)
//  sidebarclosebutton.addEventListener("click" ,closeSidebar)
// }
// init ()

// const navRelatedCode = () =>{
//     const navbarContainer = document.querySelector(".nav-container")
//  console.log(navbarContainer);
//  window.addEventListener("scroll" ,function (){
//     const scrollNumber = window.scrollY
//     const targetNumber = window.innerWidth >= 992 ? 70 : 50
//     if (scrollNumber >= targetNumber) {
//       navbarContainer.classList.add("sticky-nav")
//     } 
//     else{
//         navbarContainer.classList.remove("sticky-nav")
//     }  
//  })
// }
// DOM => Document Object Model 
 function init(){
    const hamburger = document.querySelector (".hamburger")
  const sidebarclosebutton = document.querySelector(".close-button")
  const sidebarcontainer = document.querySelector(".sidebar-container")
   const closebutton = () =>{
    sidebarcontainer.classList.remove("show-sidebar")
   }
   const openbutton = () =>{
    sidebarcontainer.classList.add("show-sidebar")
   }
   sidebarclosebutton.addEventListener("click",closebutton)
   hamburger.addEventListener("click", openbutton)
 }
 init()
 function navRelatedCode() {
    const navbarContainer = document.querySelector(".nav-container")
    window.addEventListener("scroll", function(){
      const scrollNumber = window.scrollY
      const targetNumber = window.innerWidth >= 992 ? 70 : 50;
      if(scrollNumber>= targetNumber){
          navbarContainer.classList.add("sticky-nav")
      }else {
          navbarContainer.classList.remove("sticky-nav")
      }
    })
 }
 navRelatedCode();