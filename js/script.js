$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true, //Показывает булиты
		//adaptiveHeight: true, //Адаптивная высота
		slidesToShow: 3, //Количество показываемых слайдов
		slidesToScroll: 3, //Колличество слайдов в прокрутке

		//autoplay: true,
		//centerMode: true, //Главный слайд по центру
		//Адаптивность
		responsive: [
			{
				breakpoint: 998,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 693,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		],
	});
	$('.slider__cover').slick({
		arrows: false,
		dots: true,
		//fade: true,
		//autoplay: true,
		//autoplaySpeed: 4000,
		appendDots: $('.button__cover'),
	});
	$('.block2__column').slick({
		arrows: true,
		dots: false,
		//fade: true,
		//autoplay: true,
		//autoplaySpeed: 4000,
		//appendDots: $('.block2__column '),
	});
});