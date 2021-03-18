$(document).ready(function () {
	/* СЛАЙДЕРЫ */
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
					slidesToScroll: 2,
					dots: false,
				}
			},
			{
				breakpoint: 693,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				}
			}
		],
	});
	$('.slider__cover').slick({
		arrows: false,
		dots: true,
		//fade: true,
		//autoplay: true,
		infinite:true,
		autoplaySpeed: 5000,
		appendDots: $('.button__cover'),
	});
	$('.trainingtype__title').click(function(event){
		if($('.spoiler').hasClass('one')){
			$('.trainingtype__title').not($(this)).removeClass('active');
			$('.trainingtype__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});