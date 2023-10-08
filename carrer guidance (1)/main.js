// // Get the current URL
// var url = window.location.href;
// // Get the active navigation link
// var activeLink = document.querySelector('nav a[href="' + url + '"]');
// // Add the "active" class to the active navigation link
// activeLink.classList.add('active');

// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyA_YOUR_API_KEY",
//     authDomain: "YOUR_PROJECT_



const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80)
});



$(document).ready(function(){
    /***************************************************/
    /***************** Announcements *******************/
    /***************************************************/
       $("#main").mousemove(function(){
            $(".announcement").fadeTo(1000, 0.35).fadeTo(1000, 1.0);
           });
    
       $(".announcementToggleInfo").hide();

       $("#anounce1").click(function(){
           $("#anounceDiv1").slideToggle("slow");
         });
       
       $("#anounce2").click(function(){
           $("#anounceDiv2").slideToggle("slow");
         });
           
       $("#anounce3").click(function(){
           $("#anounceDiv3").slideToggle("slow");
         });
       
       $("#anounce4").click(function(){
           $("#anounceDiv4").slideToggle("slow");
         });
           
       $("#anounce5").click(function(){
           $("#anounceDiv5").slideToggle("slow");
         });
   /***************************************************/

$("#sitelogo, #sitelogoHome").mouseover(function(){
   $("#siteheading").animate({
     opacity: '0.5'
   });
 });     
    
$("#sitelogo, #sitelogoHome").mouseleave(function(){
   $("#siteheading").animate({
     opacity: '1.0'
   });
 });
  
/***************************************************/
/********* Size Adjustment on Education Page *******/
/***************************************************/







   var section = new Array('tr');  
   section = section.join(',');

   // Reset Font Size
   var originalFontSize = $(section).css('font-size');
   $(".resetFont").click(function(){
       $(section).css('font-size', originalFontSize);  
   });

   // Increase Font Size
   $(".increaseFont").click(function(){
       var currentFontSize = $(section).css('font-size');
       var currentFontSizeNum = parseFloat(currentFontSize, 1);
       var newFontSize = currentFontSizeNum*1.2;
       $(section).css('font-size', newFontSize);
           return false;
   });

   // Decrease Font Size
   $(".decreaseFont").click(function(){
       var currentFontSize = $(section).css('font-size');
       var currentFontSizeNum = parseFloat(currentFontSize, 1);
       var newFontSize = currentFontSizeNum*0.8;
       $(section).css('font-size', newFontSize);
           return false;
   });
/***************************************************/
});

/**********************************************************/
/*************** Quotes Slider on Home Page ***************/
/**********************************************************/
var slideIndex = 3;
showSlides(slideIndex);

function plusSlides(n) {
 showSlides(slideIndex += n);
}

function currentSlide(n) {
 showSlides(slideIndex = n);
}

function showSlides(n) {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("dot");
 
 if (n > slides.length) {slideIndex = 1}    
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
 }
 for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";  
 dots[slideIndex-1].className += " active";
}
/***************************************************/


// // Get a reference to the body element
// const body = document.body;

// // Check if dark mode preference is enabled
// const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// // Function to toggle dark mode
// function toggleDarkMode() {
//   body.classList.toggle('dark-mode');
// }

// // Set dark mode based on preference
// if (isDarkMode) {
//   toggleDarkMode();
// }

// // Attach an event listener to a button or toggle switch to trigger the toggleDarkMode function
