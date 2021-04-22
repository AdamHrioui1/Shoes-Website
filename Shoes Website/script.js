let burger = document.getElementById("burger");
let sidebar = document.getElementById("sidebar");
var is_open = false;

burger.addEventListener("click", () => {
  if(is_open == false){
    sidebar.style.left = "0%";
    is_open = true;
  }
  else{
    sidebar.style.left = "-100%";
    is_open = false;
  }
})
