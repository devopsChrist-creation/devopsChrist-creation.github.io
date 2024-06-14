var bouton = document.getElementById("blob");
var menu = document.getElementById("burger");
var bouton2 = document.getElementById("blob2");

bouton.addEventListener("click", function() {
   menu.style.right = "0%";
   bouton.style.display="none"
   console.log("merde");
  });

  bouton2.addEventListener("click", function() {
    menu.style.right = "-100%";
    console.log("merde");
    bouton.style.display="block"
   });