const preloader = document.querySelector("[data-preloader");
window.addEventListener("load", () => {
	preloader.classList.add("remove");
});

// add event on multiple elements

const addEventsOnElements = function (elements, eventType, callback) {
	len = elements.length;
	for (let i = 0; i < len; i++) {
		elements[i].addEventListener(eventType, callback);
	}
};

// Navbar toggler for mobile

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler");
const overlay = document.querySelector("[data-overlay");

const toggleNav = function () {
	navbar.classList.toggle("active");
	overlay.classList.toggle("active");
	document.body.classList.toggle("nav-active");
};

addEventsOnElements(navTogglers, "click", toggleNav);

// header

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
	header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});
