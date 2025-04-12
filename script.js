// --- SELECTORY ---
const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".bars-btn");
const navLinks = document.querySelectorAll(".nav-mobile a");
const navCloseBtn = document.querySelector(".bars-closebtn");
const fadeInElements = document.querySelectorAll(".fade-in-up");

// --- FUNKCJE ---
function handleNav() {
	navMobile.classList.toggle("translate-y-0");
	navMobile.classList.toggle("-translate-y-full");

	// Zablokowanie/odblokowanie scrolla
	if (navMobile.classList.contains("translate-y-0")) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "";
	}
}

function closeNav() {
	navMobile.classList.remove("translate-y-0");
	navMobile.classList.add("-translate-y-full");
	document.body.style.overflow = ""; // przywrócenie scrolla
}

function handleIntersection(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
			observer.unobserve(entry.target); // animacja tylko raz
		}
	});
}

function observeElements() {
	const observer = new IntersectionObserver(handleIntersection, {
		threshold: 0.2,
	});
	fadeInElements.forEach((el) => observer.observe(el));
}

// --- EVENT LISTENERY ---
navBtn.addEventListener("click", handleNav);
navCloseBtn.addEventListener("click", closeNav);
navLinks.forEach((link) => link.addEventListener("click", closeNav));
document.addEventListener("DOMContentLoaded", observeElements);
