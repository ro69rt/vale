const searchInput = document.querySelector(".header-search__input");
const searchBlock = document.querySelector(".search-block");
const header = document.querySelector(".header");
const headerModal = document.querySelector(".header-modal");
const headerBack = document.querySelector(".header-block__back");
const headerLogo = document.querySelector(".header-block__logo");
const body = document.querySelector("body");

const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleTabletChange(e) {
	if (e.matches) {
		searchInput.addEventListener('click', function (event) {
			searchBlock.classList.add('active');
		});
	

		document.onclick = function (e) {
			if (e.target.className != "header-search__input") {
				searchBlock.classList.remove('active');
			};
		};
	}
}

searchInput.addEventListener('click', function (event) {
	header.classList.add('header-modal__sticky');
	headerModal.classList.add('active');
	headerBack.classList.add('active');
	headerLogo.style.display = "none";
	body.classList.add('lock');
});
headerBack.addEventListener('click', function (event) {
	header.classList.remove('header-modal__sticky');
	headerModal.classList.remove('active');
	headerBack.classList.remove('active');
	headerLogo.style.display = "block";
	body.classList.remove('lock');
});


mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)

