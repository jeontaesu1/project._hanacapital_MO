// 아코디언
function activeAccordion() {
  $('.list_accordion').each(function () {
    $(this)
      .find('.item > a')
      .on('click', function () {
        var item = $(this).parent('.item');

        // 메뉴 클릭시 하위 메뉴 표시
        if (item.hasClass('active')) {
          item.removeClass('active');
          $(this).attr('title', '상세정보 닫기');
        } else {
          item.addClass('active');
          $(this).attr('title', '상세정보 열기');
        }
      });

    $(this)
      .find('.item > input[type=checkbox]')
      .on('change', function () {
        var item = $(this).parent('.item');

        if ($(this).is(':checked')) {
          item.addClass('active');
          // float 팝업 리사이징
          /*if ($('body').hasClass('popup_opened') && $('.popup.on').hasClass('float')) {
					$('.popup.on').find('> .container').css('margin-top', -($('.popup').find('.container').outerHeight()/2));
				}*/
        } else {
          item.removeClass('active');
          // float 팝업 리사이징
          /*if ($('body').hasClass('popup_opened') && $('.popup.on').hasClass('float')) {
					$('.popup.on').find('> .container').css('margin-top', -(orgH/2));
				}*/
        }
      });
  });
}
