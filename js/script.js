// ------------------------------------------
//  navigation
// ------------------------------------------

  // hover animation
$(".nav__text ul li").hover(
  function() {
    // on
    $(this).children("a").addClass("hover");
  },
  function() {
    // off
    $(this).children("a").removeClass("hover");
  }
);

// menu-button
$("#nav__button").on("click", function(){
  $(this).toggleClass("active");
  $(".nav__text").toggleClass("active");
});

// ------------------------------------------
//  loading-animation
// ------------------------------------------
// ローディング画面をフェードインさせてページ遷移
$(function(){
  $('a[href]' + 'a[target != "_blank"]').click(function(){
    var url = $(this).attr('href'); // クリックされたリンクのURLを取得
    $('#js-loader').fadeIn(600);    // ローディング画面をフェードイン
    setTimeout(function(){ location.href = url; }, 800); // URLにリンクする
    return false;
  });
});
// ページのロードが終わった後の処理
$(window).on("load", function(){
  $('#js-loader').delay(300).fadeOut(400);
});
// ページのロードが終わらなくても10秒たったら強制的に処理を実行
$(function(){ setTimeout('stopload()', 10000); });
function stopload(){
  $('#js-loader').delay(300).fadeOut(400);
}
