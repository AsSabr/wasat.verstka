/* All rights reserved 2019 © AsSabr.org */
(() => {
	('use strict');

	const width = 600;

	/**
	 * Menu
	 */

	const burger = document.querySelector('.burger'),
		menu = document.querySelector('.nav__menu'),
		submenu = document.querySelector('.has__submenu');

	// window.addEventListener('resize', () => {
	// 	if (window.innerWidth < width) {
	// 		menu.classList.add('nav__menu_mobile');
	// 	}
	// });

	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
		menu.classList.toggle('nav__menu_active');
	});
})();
/* All rights reserved 2019 © AsSabr.org */
