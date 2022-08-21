const searchInput = document.querySelector(".header-search__input");
const searchBlock = document.querySelector(".search-block");
const headerModal = document.querySelector(".header-modal");
const headerBack = document.querySelector(".header-block__back");
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
	headerModal.classList.add('active');
	body.classList.add('lock');
});
headerBack.addEventListener('click', function (event) {
	headerModal.classList.remove('active');
	body.classList.remove('lock');
});


mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)