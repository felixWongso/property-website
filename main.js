// When the user scrolls the page, excute myFunction 
window.onscroll = function () {
    myScrollFunction()
};

// Get the navbar
var navbar = document.getElementById("myTopNav");

// Get the offset position of the navbar 
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll positon
function myScrollFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon //
function myNavFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}