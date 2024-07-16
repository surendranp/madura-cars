
if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
		elem.classList.remove('animated');
		elem.removeAttribute('data-bss-hover-animate');
		elem.removeAttribute('data-aos');
		elem.removeAttribute('data-bss-parallax-bg');
		elem.removeAttribute('data-bss-scroll-zoom');
	});
}

document.addEventListener('DOMContentLoaded', function() {
	if ('AOS' in window) {
		AOS.init();
	}

	var hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
	var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
		hoverAnimationEl.addEventListener('mouseenter', function(e){ e.target.classList.add('animated', e.target.dataset.bssHoverAnimate) });
		hoverAnimationEl.addEventListener('mouseleave', function(e){ e.target.classList.remove('animated', e.target.dataset.bssHoverAnimate) });
	});
}, false);

// nav setting 
document.addEventListener('DOMContentLoaded', function () {
	var navLinks = document.querySelectorAll('.nav-link');

	navLinks.forEach(function (link) {
		link.addEventListener('click', function () {
			navLinks.forEach(function (link) {
				link.classList.remove('active1');

			});
			this.classList.add('active1');
		});
	});
});
window.addEventListener("scroll",function(){
	var header=document.querySelector("nav");
	header.classList.toggle("sticky",window.scrollY > 0);
}) 

// form setting 

window.onload = function() {
	// Reset the form fields when the page loads
	document.getElementById("contactForm").reset();
};
// button 
const Btn=document.querySelectorAll('.btn',add());

add().addEventListener('click',()=>{
	alert('hi this surendran');
});