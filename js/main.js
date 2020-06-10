const menubtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');

menubtn.addEventListener('click', function () {
	menu.classList.toggle('active');
})