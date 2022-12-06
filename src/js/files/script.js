
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

/* Подключаем jquery */
import "./jquery.min.js";


function videoPlay(){
	$('.artists__play').click(function(){
		$(this).hide();
		$(this).parent().find('.artists__image').hide();
		$(this).parent().find('.artists__youtube').show();
	});
}

/* Видео кнопка 	 */
videoPlay();
