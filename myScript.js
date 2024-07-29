
const navBar = document.getElementById("navBar");
const menuItem = document.querySelector(".menuItem")

// ==========window resize Function==========
// <<<<<<<<<< window resize Function  >>>>>>>>>>>>>
window.addEventListener("resize",(event)=>{
  // console.log(event.target.innerWidth);
  if(event.target.innerWidth <= 900){
    menuItem.style.display = "none"
  }else{
    menuItem.style.display = "block"
  }
})
console.log(menuItem);

// ==========window resize Function==========
// <<<<<<<<<< window resize Function  >>>>>>>>>>>>>

// ===<<<<<<<<<  fethch data with API  >>>>>>>>>========
