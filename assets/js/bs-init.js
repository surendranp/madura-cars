
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
// product ape display 
// const products = [
// 	{ id: 1, name: 'Piaggio APE 250cc',modal:"modal:2021" ,price: "price: ₹3,00,000.00", image: 'assets/images/cars/ape.png', description: 'Description of Product 1' },
// 	{ id: 2, name: 'Piaggio APE 360cc', modal:"modal:2022", price: "price: ₹3,50,000.00", image: 'assets/images/cars/ape.png', description: 'Description of Product 2' },
// 	{ id: 3, name: 'Piaggio APE 400cc', modal:"modal:2023", price: "price: ₹4,54,000.00", image: 'assets/images/cars/ape.png', description: 'Description of Product 3' }
// ];

// const productList = document.querySelector('.product-list');

// products.forEach(product => {
// 	const productCard = `
//             <div class="col item" data-aos="fade-up" data-aos-delay="50">
//              <img class="img-fluid" src="${product.image}" style="-webkit-transform: scaleX(-1);transform: scaleX(-1);" alt="${product.name}">

//                     <div class="box b d-flex flex-row justify-content-around shadow rounded-2">
//                     <div class="cont1 mt-2">
//                         <h4 class="text-center text-uppercase "> ${product.name}</h4>
//                         <p> ${product.modal}</p>
//                     </div>
//                     <div class="cont2 mt-3">
//                         <a href="./product.html?id=${product.id}" class=" text-decoration-none bg-dark pt-2 pe-2 pb-2 ps-2 text-light ">View More</a>
//                         <p class="mt-2">${product.price}</p>
//                     </div>
//                    </div>
        
//                 </div>
	

// 	`;
// 	productList.innerHTML += productCard;
// });

// product_tata
// const products_tata = [
// 	{ id: 1, name: 'tata ace ',modal:"modal:2021" ,price: "price: ₹6,68,814.00", image: 'assets/images/cars/gold.png', description: 'Description of Product 1' },
// 	{ id: 2, name: 'tata ace gold', modal:"modal:2022", price: "price: ₹3,50,000.00", image: 'assets/images/cars/ace_coverd_white-removebg-preview.png', description: 'Description of Product 2' },
// 	{ id: 3, name: 'tata ace elt', modal:"modal:2023", price: "price: ₹4,54,000.00", image: 'assets/images/cars/ace_coverd_white-removebg-preview.png', description: 'Description of Product 3' }
// ];

// const productList_tata = document.querySelector('.product-list1');

// products_tata.forEach(product => {
	
// 	const productCard = `
	
//             <div class="col item" data-aos="fade-up" data-aos-delay="50">
//              <img class="img-fluid" src="${product.image}" style="-webkit-transform: scaleX(-1);transform: scaleX(-1);" alt="${product.name}">

//                     <div class="box b d-flex flex-row justify-content-around shadow rounded-2">
//                     <div class="cont1 mt-2">
//                         <h4 class="text-center text-uppercase "> ${product.name}</h4>
//                         <p> ${product.modal}</p>
//                     </div>
//                     <div class="cont2 mt-3">
//                         <a href="./product_tata.html?id=${product.id}" class=" text-decoration-none bg-dark pt-2 pe-2 pb-2 ps-2 text-light ">View More</a>
//                         <p class="mt-2">${product.price}</p>
//                     </div>
//                    </div>
        
//                 </div>
	

// 	`;
// 	productList.innerHTML += productCard;
// });