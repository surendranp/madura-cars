
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

// product_detail 
document.addEventListener('DOMContentLoaded', function() {
	const urlParams = new URLSearchParams(window.location.search);
	const name = urlParams.get('name');
	const price = urlParams.get('price');
	const img = urlParams.get('img');
	const modal=urlParams.get('modal');
	const fc=urlParams.get('fc');
	const insurance=urlParams.get('insurance');
	const owner=urlParams.get('owner');
	const number=urlParams.get('number');

	const thumb1 = urlParams.get('thumb1');
	const thumb2 = urlParams.get('thumb2');
	const thumb3 = urlParams.get('thumb3');

	document.getElementById('productName').innerText = name;
	document.getElementById('productmodal').innerHTML=modal;
	document.getElementById('productnumber').innerHTML=number;
	document.getElementById('productowner').innerHTML=owner;
	document.getElementById('productfc').innerHTML=fc;
	document.getElementById('productinsurance').innerHTML=insurance;
	document.getElementById('productPrice').innerText = `${price}`;


	document.getElementById('productImage').src = img;
	document.getElementById('thumb1').src = thumb1;
	document.getElementById('thumb2').src = thumb2;
	document.getElementById('thumb3').src = thumb3;
	document.getElementById('thumb1').classList.add('selected-thumbnail'); // Highlight the first thumbnail by default

});
// --------------------------------------------
function changeImage(thumbnail) {
	const productImage = document.getElementById('productImage');
	
	productImage.classList.add('fade-left'); // Start fade left animation

	setTimeout(() => {
		productImage.src = thumbnail.src;
		productImage.classList.remove('fade-left'); // Remove fade left animation
		productImage.classList.add('fade-in'); // Start fade in animation
	}, 500);

	setTimeout(() => {
		productImage.classList.remove('fade-in'); // Remove fade in animation
	}, 1000);

	const thumbnails = document.querySelectorAll('.thumbnail-img');
	thumbnails.forEach(img => img.classList.remove('selected-thumbnail'));
	thumbnail.classList.add('selected-thumbnail');
}
// ----------------------------
// function for closing OffscreenCanvas
document.addEventListener('DOMContentLoaded', function () {
	const offcanvasElement = document.getElementById('offcanvasNavbar');
	const offcanvasLinks = offcanvasElement.querySelectorAll('.nav-link');

	// Remove any leftover backdrops after closing
	const removeOffcanvasBackdrops = () => {
		document.querySelectorAll('.offcanvas-backdrop').forEach(backdrop => backdrop.remove());
		document.body.style.overflow = '';
	};

	// Handle each nav-link click to close offcanvas and manage scroll
	offcanvasLinks.forEach(link => {
		link.addEventListener('click', () => {
			const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
			offcanvas.hide();

			// Ensure the body scrolls properly after offcanvas closes
			setTimeout(removeOffcanvasBackdrops, 300); // Wait a bit for animation to finish
		});
	});

	// Listen to the 'hidden.bs.offcanvas' event to clean up backdrops
	offcanvasElement.addEventListener('hidden.bs.offcanvas', removeOffcanvasBackdrops);
});
// -----------------------------
//  Language Translation

    let currentLanguage = 'english'; // Default language is English

    function toggleLanguage() {
        const englishContents = document.querySelectorAll('.language-container.english');
        const TamilContents = document.querySelectorAll('.language-container.Tamil');
        const button = document.querySelector('.floating-button');
        
        if (currentLanguage === 'english') {
            englishContents.forEach(content => content.classList.remove('active'));
            TamilContents.forEach(content => content.classList.add('active'));
            button.innerText = 'English';
            currentLanguage = 'Tamil';
        } else {
            TamilContents.forEach(content => content.classList.remove('active'));
            englishContents.forEach(content => content.classList.add('active'));
            button.innerText = 'தமிழ்';
            currentLanguage = 'english';
        }
    }

	// -------------------------------