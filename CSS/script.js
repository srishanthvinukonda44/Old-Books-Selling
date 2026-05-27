
let buttons =
document.querySelectorAll(".wish-btn");

buttons.forEach((button)=>{

   button.addEventListener("click",()=>{

      button.innerHTML="✅ Added";

      alert("Added to Wishlist ❤️");
   });

});


