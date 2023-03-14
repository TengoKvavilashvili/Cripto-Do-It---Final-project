let burger = () => {


   let headerheight = document.getElementById("header").style.height;

   if (headerheight == "" || headerheight == "80px") {
      document.getElementById("header").style.height = "260px";
      document.getElementById("secondline").style.display = "none";
      document.getElementById("firstline").style.transform = "rotate(45deg)";
      document.getElementById("thirdline").style.transform = "rotate(-45deg)";
   } else {
      document.getElementById("header").style.height = "80px";
      document.getElementById("secondline").style.display = "block";
      document.getElementById("firstline").style.transform = "rotate(0deg)";
      document.getElementById("thirdline").style.transform = "rotate(0deg)";
   }


}