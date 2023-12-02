const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const AssesmentID= localStorage.getItem('AssesmentID');
 
 
 
if(AssesmentID!='null'){
	$('#notForSingleSignOn').css('display','none');
	$('.nav-links').css('display','none')
	
}
else {
	hamburger.addEventListener('click', () => {
	
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
}