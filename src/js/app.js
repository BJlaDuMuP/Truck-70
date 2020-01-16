import $ from 'jquery';

$('#main').height('100%').width('100%');  /* Основная часть, в которой находятся все элементы */
$('#left').height('100%').width('300px'); /* Левый блок навигации */
$('#center').height('100%').width($('#main').width() - 300); /* Центральная часть */

/*  Скрипт который при изменении масштабирования, пересчитывает все размеры */
$(window).bind('resize', function () {
    $('#main').height('100%').width('100%');
    $('#left').height('100%').width('300px');
    $('#center').height('100%').width($('#main').width() - 300);
});
