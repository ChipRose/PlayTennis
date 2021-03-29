$(document).ready(function () {
//===================СЛАЙДЕРЫ===================
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
					arrows: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
				}
			},
			{
				breakpoint: 693,
				settings: {
					arrows: true,
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
		infinite: true,
		autoplaySpeed: 5000,
		appendDots: $('.button__cover'),
	});
//===================СПОЙЛЕРЫ===================
	$('.trainingtype__title').click(function (event) {
		if ($('.spoiler').hasClass('one')) {
			$('.trainingtype__title').not($(this)).removeClass('active');
			$('.trainingtype__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
// плавное перемещение страницы к нужному блоку
	$("nav li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top-50;
		$("body,html").animate({scrollTop: destination }, 600);
	});
});
//===============ВЫБОР КАРТЫ=====================
//при загрузке
let id = $("#nav-radio input:checked").val();
$('.block-map > div').hide();
$('.block-map > #'+id+'').show();

//при изменении
$("#nav-radio").on("change", "input[type=radio]", function(){
  
  let id = $(this).val();
  $('.block-map > div').hide();
  $('.block-map > #'+id+'').show(); 
});

//==============БУРГЕР МЕНЮ====================
$('.header__burger').click(function(event){
	$('.header__burger, .header__menu').toggleClass('active');
	$('body').toggleClass('lock');
	let menu=document.querySelector('.header__list');
	menu.onclick=function(){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').removeClass('lock');
	};

});



