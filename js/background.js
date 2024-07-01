// ------------------------------------------
//  scroll-animation
// ------------------------------------------

// ############ page__background ############

var $win = $(window);

$win.on('load resize', function() {
  var windowWidth = window.innerWidth;

  if (windowWidth > 768) {
    // 769px以上のとき

    $(window).scroll(function(){
      // 高さ測定
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      // リサイクルアイコンの90度回転
      var recycle = $("#recycle").offset().top;
      var dist_recycle = recycle - scroll;
      if ( dist_recycle < windowHeight/3 && dist_recycle >= 0){
        var max = windowHeight/3
        var ratio = dist_recycle/max
        var deg = Math.floor(90 - 90*ratio) + "deg"
        var rotate = 'rotate(' + deg + ')'
        $("#recycle").css({
          transform: rotate,
        });
      }

      // 矢印とガラス固化体のフェードイン
      var chevron = $("#chevron").offset().top;
      var dist_chevron = chevron - scroll;
      if ( dist_chevron < windowHeight/3 && dist_chevron >= 0){
        $("#chevron, #nuclear").css({
          bottom: 0,
          opacity: 1,
          transition: "0.5s",
        })
      }

      // ガラス固化体がスクロールとともに下がる
      var nuclears = $("#nuclears").offset().top;
      var dist_nuclears = nuclears - scroll;
      if (dist_nuclears < 2*windowHeight/3 && dist_nuclears >= 0){
        var max = 2*windowHeight/3
        var ratio = dist_nuclears/max
        var bottom = -296 + 296*ratio + "px"
        $("#nuclear").css({
          bottom: bottom,
          transition: "0s",
        });
      }

      // ３つの処理方法が左右にスライド
      var space = $("#space").offset().top;
      var dist_space = space - scroll;
      if (dist_space < 2*windowHeight/3 && dist_space >= 0){
        var max = 2*windowHeight/3
        var ratio = dist_space/max
        var left = -60 + 60*ratio + "%"
        $(".container__img__inner").css({
          left: left,
        });
      }

      // 地層処分イラストの上下移動
      var layer = $("#container__layer").offset().top;
      var dist_layer = layer - scroll;
      if (dist_layer < 3*windowHeight/4 && dist_layer >= 0){
        var eleHeight = $("#container__layer").height();
        var max = 3*windowHeight/4
        var ratio = 1 - (dist_layer - windowHeight + eleHeight + 160) / (max - windowHeight + eleHeight + 160)
        var bottom = -90 + 90*ratio + "%"
        $("#layer").css({
          bottom: bottom,
        });
      }

    });
  } else if (windowWidth > 480) {
    // TABの処理
  } else {
    // SPの処理
  }
});
