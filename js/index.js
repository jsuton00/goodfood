console.log('Hello World');

const fullName = 'Jozo Suton';
const h1 = document.querySelector('.heading-primary');

console.log(fullName);
console.log(h1);

// Applying current year to the copyright year span element
const yearContainer = document.querySelector('.copyright-year');
let currentYear = new Date().getFullYear();
yearContainer.textContent = currentYear;

//Enabling functionalities for the mobile navigation element
const mobileNavBtn = document.querySelector('.mobile-nav-btn');
const header = document.querySelector('.header');

mobileNavBtn.addEventListener('click', () => {
	header.classList.toggle('nav-open');
});

//Add smooth scrolling effect
const allLinks = document.querySelectorAll('a');
allLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		const href = link.getAttribute('href');
		if (href === '#') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	});
});

// Fixing flexbox gap property missing in some Safari versions
const checkFlexGap = () => {
	const flex = document.createElement('div');
	flex.style.display = 'flex';
	flex.style.flexDirection = 'column';
	flex.style.rowGap = '1px';

	flex.appendChild(document.createElement('div'));
	flex.appendChild(document.createElement('div'));

	document.body.appendChild(flex);
	let isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) {
		document.body.classList.add('no-flexbox-gap');
	}
};
checkFlexGap();
