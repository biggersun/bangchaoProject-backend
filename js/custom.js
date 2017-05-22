$(document).ready(function(){


  $(".submenu > a").click(function(e) {
    e.preventDefault();
    var $li = $(this).parent("li");
    var $ul = $(this).next("ul");

    if($li.hasClass("open")) {
      $ul.slideUp(350);
      $li.removeClass("open");
    } else {
      $(".nav > li > ul").slideUp(350);
      $(".nav > li").removeClass("open");
      $ul.slideDown(350);
      $li.addClass("open");
    }
  });
});
var api = 'https://16909118.qcloud.la/bysj'

function get(url, parmas, callback) {
    $.ajax({
        url: api + url,
        type: 'GET',
        data: parmas,
        dataType: 'json',
        success: callback
    })
}