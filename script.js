const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link')
.forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove('active');
	navMenu.classList.remove('active');
}));

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	hamburger.classList.remove('active');
	navMenu.classList.remove('active');
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove('scroll-up')
	}

	if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
		body.classList.add('scroll-down');
		body.classList.remove('scroll-up');
	}

	if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
		body.classList.remove('scroll-down');
		body.classList.add('scroll-up');
	}
	lastScroll = currentScroll;
})
setInterval(start, 2000);
function start() {
const homeText = document.querySelector('.home-text');
	homeText.classList.add('move');
setInterval(function() {
homeText.classList.add('return');
}, 1000)
}
const drop = document.querySelector('.drop');
const dropDown = document.querySelector('.down');
drop.addEventListener("mouseover", () => {
	dropDown.classList.add('active');
})
drop.addEventListener("mouseleave", () => {
	dropDown.classList.remove('active');
})
dropDown.addEventListener("mouseover", () => {
	dropDown.classList.add('active');
	drop.classList.add('color');
})
dropDown.addEventListener("mouseleave", () => {
	dropDown.classList.remove('active');
	drop.classList.remove('color');
})
dropDown.addEventListener("click", () => {
	dropDown.classList.remove('active');
	drop.classList.remove('color');
})