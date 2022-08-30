// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

/* Подключаем jquery */
import "./jquery.min.js";


function videoPlay(){
	$('.artists__play').click(function(){
		$(this).hide();
		var videoId = $(this).data("videoid");
		var vid = document.getElementById(videoId);
		vid.play();
		$('#'+videoId).attr('controls', 'controls');
	});
}

/* Видео кнопка 	 */
videoPlay();
