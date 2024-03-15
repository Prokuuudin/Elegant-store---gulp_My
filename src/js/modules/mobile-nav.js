function mobileNav() {
	// Mobile nav button
	const navBtnPOpen = document.querySelector('#mobile-nav-btn');
	const navBtnClose = document.querySelector('#close-mobile-nav');
	const nav = document.querySelector('.mobile-nav');
	const mobileNavFade = document.querySelector('.mobile-nav-fade');
	
	// Окрыть мобнав

	navBtnPOpen.onclick = openMobileNav;

	// Закрыть кнопкой
	
	navBtnClose.onclick = closeMobileNav;

	// Закрыть кликом по оверлею
	mobileNavFade.onclick = closeMobileNav;

	function openMobileNav () {
		nav.classList.add('mobile-nav--open');
		mobileNavFade.classList.add('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	}  

	function closeMobileNav () {
		nav.classList.remove('mobile-nav--open');
		mobileNavFade.classList.remove('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	};

	// // Запретить всплытие кликов из мобильной навигации, хотя тут не обязательно, потому что оверлей идет отдельным блоком 

	// nav.addEventListener('click', function(e) {
	// 	e.stopPropagation();
	// });
}

export default mobileNav;