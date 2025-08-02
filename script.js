// Tailwind Custom Config
tailwind.config = {
	theme: {
		extend: {
			colors: {
				primary: "#1a1f3c",
				secondary: "#000000",
			},
			borderRadius: {
				button: "8px",
			},
		},
	},
};

// DOM References
const el = (id) => document.getElementById(id);
const navbar = el("navbar");
const menuBtn = el("menu-btn");
const mobileMenu = el("mobile-menu");
const heroSection = el("hero");
const tentangSection = el("tentang");
const scrollBtn = el("scrollToTopBtn");

// Modal
function openModal(name, description, ig, linkedin, imageUrl) {
	el("modalName").textContent = name;
	el("modalDescription").textContent = description;
	el("modalInstagram").href = ig;
	el("modalLinkedIn").href = linkedin;
	el("modalImage").src = imageUrl;
	el("profileModal").classList.remove("hidden");
	el("profileModal").classList.add("flex");
}

function closeModal() {
	el("profileModal").classList.remove("flex");
	el("profileModal").classList.add("hidden");
}

// Mobile Menu Toggle
menuBtn.addEventListener("click", () => {
	mobileMenu.classList.toggle("max-h-0");
	mobileMenu.classList.toggle("py-3");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
	if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
		mobileMenu.classList.add("max-h-0");
		mobileMenu.classList.remove("py-3");
	}
});

// Close menu when link clicked
document.querySelectorAll("#mobile-menu a").forEach((link) =>
	link.addEventListener("click", () => {
		mobileMenu.classList.add("max-h-0");
		mobileMenu.classList.remove("py-3");
	})
);

// Scroll behavior
window.addEventListener("scroll", () => {
	const scrollY = window.scrollY;
	const heroBottom = heroSection.offsetHeight;
	const tentangTop = tentangSection.offsetTop;

	// Show/hide scroll to top
	scrollBtn.classList.toggle("hidden", scrollY < tentangTop - 100);

	// Navbar text color change
	const isBelowHero = scrollY > heroBottom - 80;
	navbar.classList.toggle("text-white", !isBelowHero);
	navbar.classList.toggle("text-gray-800", isBelowHero);
	menu.classList.toggle("text-white", !isBelowHero);
});
