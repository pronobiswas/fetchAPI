
const navBar = document.getElementById("navBar");
const subMenu = document.querySelector(".subMenu")  
const submenulist = document.querySelector(".submenulist")
const pic = document.querySelector(".pic")

// ==========window resize Function==========
// <<<<<<<<<< window resize Function  >>>>>>>>>>>>>
// window.addEventListener("resize",(event)=>{

//   if(event.target.innerWidth <= 900){
//     subMenu.style.display = "none"
//   }else{
//     subMenu.style.display = "true"
//   }
// })

// <<<<<<<<<<<<<<< click the menu >>>>>>>>>>>>>>

subMenu.addEventListener("click" , (e)=>{
  submenulist.classList.toggle("kkk")
  console.log("hocche to");
})

// ==========window resize Function==========
// <<<<<<<<<< window resize Function  >>>>>>>>>>>>>


// ===========window scrolling==========
window.addEventListener("scroll" , (e)=>{

  // console.log(window.scrollY);
  if(window.scrollY > 100){
    pic.style.backgroundColor = "red"
  }

  if(window.scrollY > 200){
    pic.style.backgroundColor = "yellow"
  }
  if(window.scrollY > 300){
    pic.style.backgroundColor = "green"
  }
  if(window.scrollY > 400){
    pic.style.backgroundColor = "blue"
  }
  if(window.scrollY > 500){
    pic.style.backgroundColor = "pink"
  }
})

// ===<<<<<<<<<  fethch data with API  >>>>>>>>>========
console.log("its from myscript");
